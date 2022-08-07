const createZero = (
  player: IPotentialPlayer = null
): IDistanceMapCoordinateCollection => [
  {
    distance: Infinity,
    player,
  },
];

export default createZero;
