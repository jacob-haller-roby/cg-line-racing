import createZero from './createZero';
import DistanceMapCoordinateCollection from '../distanceMapCoordinateCollection';

const reduce: FReduceDistanceMaps = (
  acc = createZero(),
  cur = createZero()
) => ({
  coordinates: acc.coordinates.map((row, x) =>
    row.map((cell, y) =>
      DistanceMapCoordinateCollection.reduce(cell, cur.coordinates[x][y])
    )
  ),
});

export default reduce;
