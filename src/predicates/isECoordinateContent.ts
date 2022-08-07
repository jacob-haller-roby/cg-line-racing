import ECoordinateContent from '../enums/ECoordinateContent';
import { convertToValueMap } from '../utilities';

const COORDINATE_CONTENT_VALUE_MAP: Record<ECoordinateContent, true> =
  convertToValueMap(ECoordinateContent);

const isECoordinateContent = (
  input: string | number
): asserts input is ECoordinateContent => {
  if (!COORDINATE_CONTENT_VALUE_MAP[input]) {
    throw `${input} is not of type ECoordinateContent`;
  }
};

export default isECoordinateContent;
