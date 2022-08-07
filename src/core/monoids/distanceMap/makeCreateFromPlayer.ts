import createZero from './createZero';

const makeCreateFromPlayer =
  (coordinateIsWall: FCoordinateIsWall): FPlayerToDistanceMap =>
  (player) => {
    const distanceMap = createZero(player);

    // BFS
    const wasVisited = (coordinate: ICoordinate): boolean =>
      distanceMap.coordinates[coordinate.x][coordinate.y].first().distance !==
      Infinity;
    const createAdjacentCoordinates = (
      coordinate: IDistanceCoordinate
    ): IDistanceCoordinate[] =>
      [
        {
          x: coordinate.x + 1,
          y: coordinate.y,
          distance: coordinate.distance + 1,
        },
        {
          x: coordinate.x - 1,
          y: coordinate.y,
          distance: coordinate.distance + 1,
        },
        {
          x: coordinate.x,
          y: coordinate.y + 1,
          distance: coordinate.distance + 1,
        },
        {
          x: coordinate.x,
          y: coordinate.y - 1,
          distance: coordinate.distance + 1,
        },
      ].filterOut(coordinateIsWall);

    const coordinateQueue: IDistanceCoordinate[] = createAdjacentCoordinates({
      ...player.currentCoordinate,
      distance: 0,
    });

    let nextCoordinate: IDistanceCoordinate;
    while ((nextCoordinate = coordinateQueue.shift())) {
      if (wasVisited(nextCoordinate)) {
        continue;
      }
      distanceMap.coordinates[nextCoordinate.x][
        nextCoordinate.y
      ].first().distance = nextCoordinate.distance;
      coordinateQueue.push(...createAdjacentCoordinates(nextCoordinate));
    }

    return distanceMap;
  };

export default makeCreateFromPlayer;
