const createIsBelowDistance =
  (distance: number) =>
  (distanceMapCoordinate: IDistanceMapCoordinate): boolean =>
    distanceMapCoordinate.distance < distance;

export default createIsBelowDistance;
