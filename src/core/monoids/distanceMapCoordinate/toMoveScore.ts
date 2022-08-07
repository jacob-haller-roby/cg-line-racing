const toMoveScore: FDistanceMapCoordinateToMoveScore = (
  distanceMapCoordinate
) => ({
  move: distanceMapCoordinate.player.move,
  score: 1,
});

export default toMoveScore;
