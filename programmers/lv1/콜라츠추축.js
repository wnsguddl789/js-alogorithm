const CASES = [
  { n: 6, result: 8 },
  { n: 16, result: 4 },
  { n: 626361, result: -1 },
];

function solution(num) {
  let index = 0;
  while (index <= 500) {
    if (num === 1) return index;
    num = isEven(num) ? num / 2 : num * 3 + 1;
    index++;
  }
  return -1;
}

const isEven = (num) => num % 2 === 0;

console.log(CASES.map(({ n, result }) => solution(n)));
