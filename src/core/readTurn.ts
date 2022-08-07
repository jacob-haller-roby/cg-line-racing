const readTurn: FReadTurn = () => {
  const inputs = readline().split(' ');
  const [playerCount, playerId] = inputs.map((i) => parseInt(i));
  const players: IPlayer[] = Array.range(playerCount).map((id) => {
    const playerInputs = readline().split(' ');
    const [startingX, startingY, currentX, currentY] = playerInputs.map((i) =>
      parseInt(i)
    );
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

export default readTurn;
