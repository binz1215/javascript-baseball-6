import { Console } from '@woowacourse/mission-utils';
import { userInput } from '../view/inputview.js';

class ValidCheck {
  validResult(input) {
    const inputArray = this.#split(input);
    this.#isnumber(inputArray);
    this.#isThree(inputArray);
    this.#isRange(inputArray);
    this.#isDupl(inputArray);
    const numArry = this.#intoNum(inputArray);

    return numArry;
  }

  #split(input) {
    const inputArray = input.split('');
    return inputArray;
  }

  #isnumber(inputArray) {
    if (
      !inputArray.every((item) => {
        const numItem = Number(item);
        return !Number.isNaN(numItem);
      })
    ) {
      throw Error('숫자가 아닌 값이 입력되었습니다.');
    }
  }

  #isThree(inputArray) {
    const THREE = 3;
    if (inputArray.length !== THREE) {
      throw Error('3개의 숫자만 입력해주세요.');
    }
  }

  #isRange(inputArray) {
    const min = 1;
    const max = 9;
    if (!inputArray.every((item) => item >= min && item <= max)) {
      throw Error('1~9 사이의 숫자만 입력해주세요.');
    }
  }

  #isDupl(inputArray) {
    const set = new Set(inputArray);

    if (inputArray.length !== set.size) {
      throw Error('중복되는 숫자는 입력할 수 없습니다.');
    }
  }

  #intoNum(inputArray) {
    const numArry = inputArray.map(Number);
    return numArry;
  }
}

export default ValidCheck;

const input = await userInput();

const valid = new ValidCheck();
Console.print(valid.validResult(input));
