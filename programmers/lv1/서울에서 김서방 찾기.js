const CASES = [{ seoul: ['Jane', 'Kim'] }];

function solution(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

console.log(CASES.map(({ seoul }) => solution(seoul)));
