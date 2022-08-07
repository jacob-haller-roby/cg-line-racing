const getByMove = (
  moveScoreCollection: IMoveScoreCollection,
  move: EMove
): IMoveScore | undefined =>
  moveScoreCollection.find((moveScore) => moveScore.move === move);

export default getByMove;
