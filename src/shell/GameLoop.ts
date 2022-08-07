// As the shell we CAN be a stateful class, so let's do so.

import readTurn from '../core/readTurn';
import Map from '../core/monoids/map';
import DistanceMap from '../core/monoids/distanceMap';
import expandPlayers from '../core/expandPlayers';

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

    const flattenDistanceMapCoordinateCollections =
      null as FFlattenDistanceMapCoordinateCollections;
    const distanceMapCoordinateCollectionToMoveScoreCollection =
      null as FDistanceMapCoordinateCollectionToMoveScoreCollection;
    const reduceMoveScoreCollection = null as FReduceMoveScoreCollection;
    const reduceMoveScore = null as FReduceMoveScore;
    const moveScoreToMove = null as FMoveScoreToMove;
    const submitMove = null as FSubmitMove;

    // Potential moves. Each item represents a move direction or stationary enemy
    expandPlayers(turn, coordinateIsWall)
      // x/y map with distance & IPotentialPlayer, as 1-item array
      .map(DistanceMap.makeCreateFromPlayer(coordinateIsWall))
      // merge arrays for same x/y coords, stored as 1-item array
      .reduceA(DistanceMap.reduce)
      // We no longer care about the x/y coord, just the scores, so flatten it down
      // [player][xy][playerId]
      .map(DistanceMap.toDistanceMapCoordinateCollections)
      .flat()
      // Convert each scoreable array into an array showing which moves score well
      .map(distanceMapCoordinateCollectionToMoveScoreCollection)
      // reduce to create a single IMoveScore for each possible move
      .reduce(reduceMoveScoreCollection)
      // reduce to the best of the available moves
      .reduceA(reduceMoveScore)
      // extract move
      .map(moveScoreToMove)
      // handle the single result
      .map(submitMove);
  }
}

export default GameLoop;
