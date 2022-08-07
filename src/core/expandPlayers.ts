import EMove from '../enums/EMove';

const createMovePotentials = (
  player: IPlayer,
  coordinateIsWall: FCoordinateIsWall
) =>
  [
    {
      id: player.id,
      currentCoordinate: {
        x: player.currentCoordinate.x,
        y: player.currentCoordinate.y - 1,
      },
      move: EMove.UP,
    },
    {
      id: player.id,
      currentCoordinate: {
        x: player.currentCoordinate.x,
        y: player.currentCoordinate.y + 1,
      },
      move: EMove.DOWN,
    },
    {
      id: player.id,
      currentCoordinate: {
        x: player.currentCoordinate.x + 1,
        y: player.currentCoordinate.y,
      },
      move: EMove.RIGHT,
    },
    {
      id: player.id,
      currentCoordinate: {
        x: player.currentCoordinate.x - 1,
        y: player.currentCoordinate.y,
      },
      move: EMove.LEFT,
    },
  ].filter((potential) => !coordinateIsWall(potential.currentCoordinate));

const createStaticPotentials = (player: IPlayer) => [
  {
    id: player.id,
    currentCoordinate: player.currentCoordinate,
  },
];

const createPlayerToPotential =
  (coordinateIsWall: FCoordinateIsWall, myId: IPlayerId) =>
  (player: IPlayer): IPotentialPlayer[] =>
    player.id === myId
      ? createMovePotentials(player, coordinateIsWall)
      : createStaticPotentials(player);

const expandPlayers: FExpandPlayers = (turn, coordinateIsWall) =>
  turn.players.flatMap(
    createPlayerToPotential(coordinateIsWall, turn.playerId)
  );

export default expandPlayers;
