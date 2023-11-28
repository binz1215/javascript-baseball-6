import { userInput, restart } from '../view/inputview.js';
import ValidCheck from './valid_check.js';
import Print from '../view/outview.js';

import { randomMaker } from '../model/random_maker.js';

class GamePlay {
  #print = new Print();

  #valid = new ValidCheck();

  async restartGame() {
    this.#print.start();
    let gameRuselt = await this.#allGame();
    while (gameRuselt && (await this.#restartNum())) {
      gameRuselt = await this.#allGame();
    }
  }

  async #restartNum() {
    const num = this.#valid.isOneOrTwo(await restart());
    if (num === 1) {
      return true;
    }
  }

  async #allGame() {
    const computer = randomMaker();

    if (await this.#playResult(computer)) {
      return true;
    }
  }

  async #playResult(computer) {
    let retry = true;

    while (retry) {
      const input = this.#valid.validResult(await userInput());
      const count = this.#compare(computer, input);
      if (this.#printResult(count)) {
        retry = false;
      }
    }
    return true;
  }

  #compare(computer, input) {
    const count = [0, 0];
    for (let i = 0; i < computer.length; i++) {
      if (computer.includes(input[i])) {
        count[1] += 1;
      }
      if (computer[i] === input[i]) {
        count[0] += 1;
        count[1] -= 1;
      }
    }

    return count;
  }

  #printResult(count) {
    const ZERO = 0;
    const THREE = 3;

    if (count[0] === ZERO && count[1] === ZERO) return this.#print.nothing();
    if (count[0] === ZERO && count[1] !== ZERO) return this.#print.ball(count);
    if (count[0] !== ZERO && count[1] === ZERO) {
      this.#print.strike(count);
      if (count[0] === THREE) {
        this.#print.complete();
        return true;
      }
    }
    if (count[0] !== ZERO && count[1] !== ZERO) return this.#print.ballNstrike(count);
  }
}

export default GamePlay;
