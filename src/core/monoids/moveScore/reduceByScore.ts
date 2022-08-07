const reduceByScore: FReduceMoveScore = (acc, cur) => {
  if (acc.move !== null && cur.move !== null && acc.move === cur.move) {
    throw `reduceByScore received move scores of identical types`;
  }

  return acc.score > cur.score ? acc : cur;
};

export default reduceByScore;
