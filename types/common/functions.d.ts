type UnknownFunction = (...args: unknown[]) => unknown;

type FCoordinateIsWall = (coordinate: ICoordinate) => boolean;
type FCreateCoordinateMap = (coordinateIsWall: FCoordinateIsWall) => IMap;
type FCreateDistanceMap = (player: IPotentialPlayer) => IDistanceMap;
type FReadTurn = () => ITurnInput;

type FGenericReducer<T> = (acc: T, cur: T) => T;
type FGenericFlattener<T> = (arr: T[]) => T;

type FReduceMap = FGenericReducer<IMap>;

type FExpandPlayers = (
  turn: ITurnInput,
  coordinateIsWall: FCoordinateIsWall
) => IPotentialPlayer[];
type FPlayerToDistanceMap = (player: IPotentialPlayer) => IDistanceMap;
type FReduceDistanceMaps = FGenericReducer<IDistanceMap>;
type FReduceDistanceMapCoordinateCollections =
  FGenericReducer<IDistanceMapCoordinateCollection>;
type FDistanceMapToDistanceMapCoordinateCollections = (
  distanceMap: IDistanceMap
) => IDistanceMapCoordinateCollection[];
type FFlattenDistanceMapCoordinateCollections =
  FGenericFlattener<IDistanceMapCoordinateCollection>;
type FDistanceMapCoordinateCollectionToMoveScoreCollection = (
  distanceMapCoordinateCollections: IDistanceMapCoordinateCollection
) => IMoveScoreCollection;
type FDistanceMapCoordinateToMoveScore = (
  distanceMapCoordinate: IDistanceMapCoordinate
) => IMoveScore;
type FReduceMoveScoreCollection = FGenericReducer<IMoveScoreCollection>;
type FReduceMoveScore = FGenericReducer<IMoveScore>;
type FMoveScoreToMove = (moveScore: IMoveScore) => EMove;
type FReduceDistanceMapCoordinate = FGenericReducer<IDistanceMapCoordinate>;

type FSubmitMove = (move: EMove) => void;
