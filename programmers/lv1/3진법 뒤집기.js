const CASES = [
  { n: 45, result: 7 },
  { n: 125, result: 229 },
];

function solution(n) {
  const third = n.toString(3);

  var answer = 0;
  for (let i = third.length - 1; i >= 0; i--) {
    answer += parseInt(third[i]) * Math.pow(3, i);
  }
  return answer;
}

console.log(CASES.map(({ n, result }) => (solution(n) === result ? '통과' : '실패')));
