import create from './create';

const fromTurnInput = (turn: ITurnInput) => {
  const coordinateIsWall: FCoordinateIsWall = (coordinate) =>
    turn.players.some(
      (player) =>
        player.currentCoordinate.x === coordinate.x &&
        player.currentCoordinate.y === coordinate.y
    );
  return create(coordinateIsWall);
};

export default fromTurnInput;
