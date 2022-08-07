import createZero from './createZero';
import create from './create';
import ECoordinateContent from '../../../enums/ECoordinateContent';

const zero = createZero();

const createCoordinateIsWall =
  (acc: IMap, cur: IMap): FCoordinateIsWall =>
  (coordinate) =>
    acc[coordinate.x][coordinate.y] == ECoordinateContent.WALL ||
    cur[coordinate.x][coordinate.y] == ECoordinateContent.WALL;

const reduce: FReduceMap = (acc = zero, cur = zero) =>
  create(createCoordinateIsWall(acc, cur));

export default reduce;
