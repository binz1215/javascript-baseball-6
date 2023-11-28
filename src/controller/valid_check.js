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
    const inputArray = input.split('').map(Number);
    return inputArray;
  }

  #isnumber(inputArray) {
    if (!inputArray.every((item) => !Number.isNaN(item))) {
      throw Error('[ERROR] 숫자가 아닌 값이 입력되었습니다.');
    }
  }

  #isThree(inputArray) {
    const THREE = 3;
    if (inputArray.length !== THREE) {
      throw Error('[ERROR] 3개의 숫자만 입력해 주세요.');
    }
  }

  #isRange(inputArray) {
    const min = 1;
    const max = 9;
    if (!inputArray.every((item) => item >= min && item <= max)) {
      throw Error('[ERROR] 1~9 사이의 숫자만 입력해 주세요.');
    }
  }

  #isDupl(inputArray) {
    const set = new Set(inputArray);

    if (inputArray.length !== set.size) {
      throw Error('[ERROR] 중복되는 숫자는 입력할 수 없습니다.');
    }
  }

  #intoNum(inputArray) {
    const numArry = inputArray.map(Number);
    return numArry;
  }

  isOneOrTwo(restart) {
    const num = Number(restart);
    const ONE = 1;
    const TWO = 2;

    if (Number.isNaN(num) || num > TWO || num < ONE) {
      throw Error('[ERROR] 1 또는 2의 숫자만 입력해 주세요.\n');
    }
    return num;
  }
}

export default ValidCheck;
