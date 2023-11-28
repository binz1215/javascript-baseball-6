import { Console } from '@woowacourse/mission-utils';

async function userInput() {
  const comein = await Console.readLineAsync('숫자를 입력해주세요 : ');
  return comein;
}

async function restart() {
  const comein = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  return comein;
}

export { userInput, restart };
