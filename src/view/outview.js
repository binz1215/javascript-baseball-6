import { Console } from '@woowacourse/mission-utils';

class Print {
  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  complete() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  ball(count) {
    Console.print(`${count[1]}볼`);
  }

  ballNstrike(count) {
    Console.print(`${count[1]}볼 ${count[0]}스트라이크`);
  }

  strike(count) {
    Console.print(`${count[0]}스트라이크`);
  }

  nothing() {
    Console.print('낫싱');
  }
}

export default Print;
