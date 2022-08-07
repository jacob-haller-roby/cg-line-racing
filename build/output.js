'use strict';

class Pipeline {
    constructor(value) {
        this.value = value;
    }
    pipe(fn) {
        return new Pipeline(fn(this.value));
    }
    exitPipe() {
        return this.value;
    }
}

Array.prototype.zip = function (arr) {
    if (arr.length !== this.length) {
        throw 'Cannot zip arrays of differing size';
    }
    return this.map((item, index) => [item, arr[index]]);
};
Array.prototype.applyMap = function (...args) {
    return this.map((f) => f(...args));
};
Array.prototype.unique = function () {
    return [...new Set(this)];
};
Array.prototype.excludes = function (searchElement, fromIndex) {
    return !this.includes(searchElement, fromIndex);
};
Array.prototype.last = function () {
    return this[this.length - 1];
};
Array.prototype.first = function () {
    return this[0];
};
Array.prototype.filterOut = function (predicate, thisArg) {
    return this.filter((item, index, array) => !predicate(item, index, array), thisArg || this);
};
Array.prototype.matrix = function (arr) {
    return this.flatMap((t) => arr.map((u) => [t, u]));
};
Array.prototype.log = function (...args) {
    console.error(...args);
    console.error(this);
    return this;
};
Array.prototype.reduceP = function (fn) {
    return new Pipeline(this.reduce(fn));
};
Array.prototype.reduceA = function (fn) {
    return [this.reduce(fn)];
};
Array.range = function (length) {
    return [...Array(length).keys()];
};

const readTurn = () => {
    const inputs = readline().split(' ');
    const [playerCount, playerId] = inputs.map(parseInt);
    const players = Array.range(playerCount).map((id) => {
        const playerInputs = readline().split(' ');
        const [startingX, startingY, currentX, currentY] = playerInputs.map(parseInt);
        return {
            id,
            startingCoordinate: {
                x: startingX,
                y: startingY,
            },
            currentCoordinate: {
                x: currentX,
                y: currentY,
            },
        };
    });
    return {
        playerCount,
        playerId,
        players,
    };
};

const createCoordinateMap = (coordinateIsWall) => {
    return Array.range(30).map((x) => Array.range(20).map((y) => coordinateIsWall(x, y)));
};

var ECoordinateContent;
(function (ECoordinateContent) {
    ECoordinateContent[ECoordinateContent["WALL"] = 1] = "WALL";
    ECoordinateContent[ECoordinateContent["EMPTY"] = 0] = "EMPTY";
})(ECoordinateContent || (ECoordinateContent = {}));
var ECoordinateContent$1 = ECoordinateContent;

const createMapZeroMonoid = () => ({
    coordinates: createCoordinateMap(() => ECoordinateContent$1.EMPTY),
});

const isMapWall = (map, x, y) => {
    return map[x][y] === ECoordinateContent$1.WALL;
};

const reduceMapMonoids = (acc, cur) => {
    const coordinateIsWall = (x, y) => {
        const isWall = isMapWall(acc, x, y) || isMapWall(cur, x, y);
        return isWall ? ECoordinateContent$1.WALL : ECoordinateContent$1.EMPTY;
    };
    const coordinates = createCoordinateMap(coordinateIsWall);
    return { coordinates };
};

const turnInputToMapMonoid = (turn) => {
    const coordinateIsWall = (x, y) => {
        const isWall = turn.players.some((player) => player.currentCoordinate.x === x && player.currentCoordinate.y === y);
        return isWall ? ECoordinateContent$1.WALL : ECoordinateContent$1.EMPTY;
    };
    const coordinates = createCoordinateMap(coordinateIsWall);
    return { coordinates };
};

// As the shell we CAN be a stateful class, so let's do so.
class GameLoop {
    constructor() {
        this.mapMonoid = createMapZeroMonoid();
    }
    async loop() {
        const turn = readTurn();
        const turnMap = turnInputToMapMonoid(turn);
        this.mapMonoid = reduceMapMonoids(this.mapMonoid, turnMap);
        const expandPlayers = null;
        const playerToDistanceMap = null;
        const reduceDistanceMaps = null;
        const distanceMapToCoordinates = null;
        const flattenDistanceMapCoordinateCollections = null;
        const distanceMapCoordinateCollectionToMoveScoreCollection = null;
        const reduceMoveScoreCollection = null;
        const moveScoreCollectionToBestMove = null;
        const bestMove = expandPlayers(turn)
            .map(playerToDistanceMap)
            .reduceA(reduceDistanceMaps)
            .flatMap(distanceMapToCoordinates)
            .map(flattenDistanceMapCoordinateCollections)
            .map(distanceMapCoordinateCollectionToMoveScoreCollection)
            .reduceA(reduceMoveScoreCollection)
            .flatMap(moveScoreCollectionToBestMove)
            .first();
        console.log(bestMove);
    }
}

const gameLoop = new GameLoop();
while (true) {
    gameLoop.loop();
}
