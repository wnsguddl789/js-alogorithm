const Input = [
  { numbers: [2, 1, 3, 4, 1], result: [2, 3, 4, 5, 6, 7] },
  { numbers: [5, 0, 2, 7], result: [2, 5, 7, 9, 12] },
];

// 내가 작성한 답
function solution(numbers) {
  const answer = [
    ...numbers
      .map((num, i) =>
        new Array(numbers.length).fill(0).map((el, j) => {
          if (i !== j) return num + numbers[j];
        })
      )
      .flat()
      .filter((el) => el),
  ];
  return [...new Set(answer)].sort((a, b) => a - b);
}

// 정답

function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}
