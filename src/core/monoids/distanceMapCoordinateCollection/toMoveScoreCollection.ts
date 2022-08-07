import DistanceMapCoordinate from '../distanceMapCoordinate';

const toMoveScoreCollection: FDistanceMapCoordinateCollectionToMoveScoreCollection =
  (distanceMapCoordinateCollections) =>
    distanceMapCoordinateCollections
      .filter(DistanceMapCoordinate.isMe)
      .filter(
        distanceMapCoordinateCollections
          .filterOut(DistanceMapCoordinate.isMe)
          .reduceA(DistanceMapCoordinate.reduce)
          .map(DistanceMapCoordinate.getDistance)
          .map(DistanceMapCoordinate.createIsBelowDistance)
          .first()
      )
      .map(DistanceMapCoordinate.toMoveScore);

export default toMoveScoreCollection;
