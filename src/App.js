import GamePlay from './controller/game_play.js';

class App {
  async play() {
    const game = new GamePlay();
    await game.restartGame();
  }
}

export default App;
