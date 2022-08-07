import { BOUNDARIES } from '../../../constants';
import ECoordinateContent from '../../../enums/ECoordinateContent';

const create: FCreateCoordinateMap = (coordinateIsWall) => {
  const coordinates = Array.range(BOUNDARIES.X.UPPER + 1).map((x) =>
    Array.range(BOUNDARIES.Y.UPPER + 1).map((y) =>
      coordinateIsWall({ x, y })
        ? ECoordinateContent.WALL
        : ECoordinateContent.EMPTY
    )
  );
  return { coordinates };
};

export default create;
