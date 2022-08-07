import readTurn from '../core/readTurn';
import Map from '../core/monoids/map';
import DistanceMap from '../core/monoids/distanceMap';
import expandPlayers from '../core/expandPlayers';
import DistanceMapCoordinateCollection from '../core/monoids/distanceMapCoordinateCollection';
import MoveScoreCollection from '../core/monoids/moveScoreCollection';
import MoveScore from '../core/monoids/moveScore';
import submitMove from './submitMove';

class GameLoop {
  map;
  async loop() {
    console.error('looping...');
    const turn = readTurn();
    console.error('turn read: ', turn);
    const turnMap = Map.fromTurnInput(turn);
    console.error('turn to map');
    this.map = Map.reduce(this.map, turnMap);
    console.error('map updated');
    const coordinateIsWall: FCoordinateIsWall = Map.createWallPredicate(
      this.map
    );

    // MONOIDS: IMap, IDistanceMap, IDistanceMapCoordinateCollection, IMoveScore, IMoveScoreCollection

    console.error('starting core logic');
    expandPlayers(turn, coordinateIsWall)
      .msg('Stage 1')
      .map(DistanceMap.makeCreateFromPlayer(coordinateIsWall))
      .msg('Stage 2')
      .reduceA(DistanceMap.reduce)
      .msg('Stage 3')
      .flatMap(DistanceMap.toDistanceMapCoordinateCollections)
      .msg('Stage 4')
      .map(DistanceMapCoordinateCollection.toMoveScoreCollection)
      .msg('Stage 5')
      .reduce(MoveScoreCollection.reduce)
      .msg('Stage 6')
      .reduceA(MoveScore.reduceByScore)
      .msg('Stage 7')
      .map(MoveScore.toMove)
      .log('Stage 8')
      .map(submitMove);
  }
}

export default GameLoop;
