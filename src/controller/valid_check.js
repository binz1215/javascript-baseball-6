import { userInput } from '../view/inputview.js';

class ValidCheck {
  validResult(input) {
    const inputArray = this.#split(input);
    this.#isnumber(inputArray);
    this.#isThree(inputArray);
    this.#isRange(inputArray);
    this.#isDupl(inputArray);

    return inputArray;
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
    const Three = 3;
    if (inputArray.length !== Three) {
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
}

export default ValidCheck;

const input = await userInput();

const valid = new ValidCheck();
valid.validResult(input);
