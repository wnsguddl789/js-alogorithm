const CASES = [
  { d: [1, 3, 2, 5, 4], budget: 9, result: 3 },
  { d: [2, 2, 3, 3], budget: 10, result: 4 },
];

function solution(d, budget) {
  d.sort((a, b) => a - b);

  let answer = 0;

  for (const budgetDepart of d) {
    if (budget < budgetDepart) break;
    answer += 1;
    budget -= budgetDepart;
  }
  return answer;
}

console.log(CASES.map(({ d, budget, result }) => solution(d, budget)));
