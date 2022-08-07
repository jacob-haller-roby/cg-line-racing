const toDistanceMapCoordinateCollections: FDistanceMapToDistanceMapCoordinateCollections =
  (distanceMap) => distanceMap.coordinates;

export default toDistanceMapCoordinateCollections;

/*
coordinates: [x][y][playerId]
flat(1): [xy][playerId]
 */
