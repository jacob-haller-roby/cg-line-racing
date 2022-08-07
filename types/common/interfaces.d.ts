interface IPipeline<T> {
  pipe<R>(fn: (arg: T) => R): IPipeline<R>;
  exitPipe(): T;
}

interface IMap {
  coordinates: ECoordinateContent[][];
}

type IPlayerId = number;

interface ITurnInput {
  playerCount: number;
  playerId: IPlayerId;
  players: IPlayer[];
}

interface IPlayer {
  id: IPlayerId;
  startingCoordinate: ICoordinate;
  currentCoordinate: ICoordinate;
}

interface ICoordinate {
  x: number;
  y: number;
}

interface IDistanceCoordinate extends ICoordinate {
  distance: number;
}

interface IPotentialPlayer {
  id: IPlayerId;
  currentCoordinate: ICoordinate;
  move?: EMove;
}

// NEEDS TO BE A MONOID
interface IDistanceMap {
  coordinates: IDistanceMapCoordinateCollection[][];
}

interface IDistanceMapCoordinate {
  distance: number;
  player: IPotentialPlayer | null;
}

type IDistanceMapCoordinateCollection = IDistanceMapCoordinate[];

interface IMoveScore {
  move: EMove;
  score: number;
}
type IMoveScoreCollection = IMoveScore[];
