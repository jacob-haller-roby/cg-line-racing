const readTurn: FReadTurn = () => {
  const inputs = readline().split(' ');
  const [playerCount, playerId] = inputs.map(parseInt);
  const players: IPlayer[] = Array.range(playerCount).map((id) => {
    const playerInputs = readline().split(' ');
    const [startingX, startingY, currentX, currentY] =
      playerInputs.map(parseInt);
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
