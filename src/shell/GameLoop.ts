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
    const turn = readTurn();
    const turnMap = Map.fromTurnInput(turn);
    this.map = Map.reduce(this.map, turnMap);
    const coordinateIsWall: FCoordinateIsWall = Map.createWallPredicate(
      this.map
    );

    // MONOIDS: IMap, IDistanceMap, IDistanceMapCoordinateCollection, IMoveScore, IMoveScoreCollection

    expandPlayers(turn, coordinateIsWall)
      .map(DistanceMap.makeCreateFromPlayer(coordinateIsWall))
      .reduceA(DistanceMap.reduce)
      .flatMap(DistanceMap.toDistanceMapCoordinateCollections)
      .map(DistanceMapCoordinateCollection.toMoveScoreCollection)
      .reduce(MoveScoreCollection.reduce)
      .reduceA(MoveScore.reduceByScore)
      .map(MoveScore.toMove)
      .map(submitMove);
  }
}

export default GameLoop;
