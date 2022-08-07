const isMe = (distanceMapCoordinate: IDistanceMapCoordinate) =>
  distanceMapCoordinate.player.move !== undefined;

export default isMe;
