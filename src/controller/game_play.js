import { Console } from '@woowacourse/mission-utils';
import { userInput, restart } from '../view/inputview.js';
import ValidCheck from './valid_check.js';
import Print from '../view/outview.js';

import { randomMaker } from '../model/random_maker.js';

class GamePlay {
  async playResult(computer) {
    let retry = true;
    const valid = new ValidCheck();
    while (retry) {
      const input = valid.validResult(await userInput());
      Console.print(input);
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
    const print = new Print();

    if (count[0] === ZERO && count[1] === ZERO) return print.nothing();
    if (count[0] === THREE) {
      print.complete();
      return true;
    }
    if (count[0] === ZERO && count[1] !== ZERO) return print.ball(count);
    if (count[0] !== ZERO && count[1] === ZERO) return print.strike(count);
    if (count[0] !== ZERO && count[1] !== ZERO) return print.ballNstrike(count);
  }
}

export default GamePlay;

const computer = randomMaker();
Console.print(computer);
const play = new GamePlay();
play.playResult(computer);
