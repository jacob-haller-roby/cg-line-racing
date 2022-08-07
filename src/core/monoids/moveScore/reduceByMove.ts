import createZero from './createZero';

const reduceByMove: FReduceMoveScore = (
  acc = createZero(),
  cur = createZero()
) => {
  if (acc.move !== null && cur.move !== null && acc.move !== cur.move) {
    throw `reduceByMove received move scores of differing types`;
  }
  return {
    move: acc.move || cur.move,
    score: acc.score + cur.score,
  };
};

export default reduceByMove;
