function solution(k, m, score) {
  // 점수를 내림차순으로 정렬합니다.
  score.sort((a, b) => b - a);

  let maxProfit = 0;
  let boxes = Math.floor(score.length / m);

  for (let i = 0; i < boxes; i++) {
    // 각 상자의 최저 점수를 구합니다.
    let boxScore = score[(i + 1) * m - 1];
    maxProfit += boxScore * m;
  }

  return maxProfit;
}
