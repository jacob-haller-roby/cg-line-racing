import createZero from './createZero';

const reduce: FReduceDistanceMapCoordinateCollections = (
  acc = createZero(),
  cur = createZero()
) => [...acc, ...cur];

export default reduce;
