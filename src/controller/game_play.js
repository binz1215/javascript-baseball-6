import { userInput, restart } from '../view/inputview.js';
import ValidCheck from './valid_check.js';

class GamePlay {
  playresult(computet) {}

  compare(computer, input) {
    const count = [0, 0];
    for (let i = 0; i < computer.length; i++) {
      if (computer[i] === input[i]) {
        count[0] += 1;
      }
    }
  }
}

export default GamePlay;
