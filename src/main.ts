import './global';
import GameLoop from './shell/GameLoop';

const gameLoop = new GameLoop();
while (true) {
  gameLoop.loop();
}

export {};
