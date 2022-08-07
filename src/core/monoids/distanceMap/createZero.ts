import { BOUNDARIES } from '../../../constants';
import DistanceMapCoordinateCollection from '../distanceMapCoordinateCollection';

const createZero = (player: IPotentialPlayer = null): IDistanceMap => ({
  coordinates: Array.range(BOUNDARIES.X.UPPER + 1).map(() =>
    Array.range(BOUNDARIES.Y.UPPER + 1).map(() =>
      DistanceMapCoordinateCollection.createZero(player)
    )
  ),
});

export default createZero;
