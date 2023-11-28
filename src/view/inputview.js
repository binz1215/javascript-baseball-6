import { Console } from '@woowacourse/mission-utils';

async function input() {
  const comein = await Console.readLineAsync('숫자를 입력해주세요 : ');
  return comein;
}

export { input };
