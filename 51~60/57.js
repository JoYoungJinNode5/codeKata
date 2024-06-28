function solution(answers) {
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let scores = [0, 0, 0]; // 각 수포자의 점수를 저장할 배열

  // 정답 배열을 순회하면서 각 수포자의 찍는 패턴과 비교
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supo1[i % supo1.length]) {
      scores[0]++;
    }
    if (answers[i] === supo2[i % supo2.length]) {
      scores[1]++;
    }
    if (answers[i] === supo3[i % supo3.length]) {
      scores[2]++;
    }
  }

  // 가장 높은 점수를 찾습니다.
  const maxScore = Math.max(...scores);
  let result = [];

  // 가장 높은 점수를 받은 수포자를 결과 배열에 추가합니다.
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      result.push(i + 1);
    }
  }

  return result;
}
