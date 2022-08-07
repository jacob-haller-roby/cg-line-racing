import getByMove from './getByMove';
import MoveScore from '../moveScore';
import createZero from './createZero';

const reduce: FReduceMoveScoreCollection = (
  acc = createZero(),
  cur = createZero()
) =>
  [...acc, ...cur]
    .map(MoveScore.toMove)
    .unique()
    .map((move) =>
      MoveScore.reduceByMove(getByMove(acc, move), getByMove(cur, move))
    );

export default reduce;
