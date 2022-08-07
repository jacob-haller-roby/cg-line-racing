import { BOUNDARIES } from '../../../constants';

const createWallPredicate =
  (map: IMap): FCoordinateIsWall =>
  (coordinate): boolean => {
    return (
      coordinate.x < BOUNDARIES.X.LOWER ||
      coordinate.x > BOUNDARIES.X.UPPER ||
      coordinate.y < BOUNDARIES.Y.LOWER ||
      coordinate.y > BOUNDARIES.Y.UPPER ||
      map.coordinates[coordinate.x][coordinate.y] == ECoordinateContent.WALL
    );
  };

export default createWallPredicate;
