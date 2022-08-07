import createZero from './createZero';

const reduce: FReduceDistanceMapCoordinate = (
  acc = createZero(),
  cur = createZero()
) => (cur.distance < acc.distance ? cur : acc);

export default reduce;
