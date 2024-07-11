function solution(k, score) {
  // 명예의 전당을 유지하기 위한 배열
  let hallOfFame = [];
  // 매일 명예의 전당의 최하위 점수를 저장할 배열
  let result = [];

  // 매일 출연하는 가수의 점수를 순회
  for (let i = 0; i < score.length; i++) {
    let currentScore = score[i];

    // 명예의 전당에 점수를 추가
    hallOfFame.push(currentScore);

    // 명예의 전당 점수를 정렬 (내림차순으로 정렬)
    hallOfFame.sort((a, b) => b - a);

    // 명예의 전당의 점수가 k개를 초과하면, 최하위 점수를 제거
    if (hallOfFame.length > k) {
      hallOfFame.pop();
    }

    // 매일 명예의 전당의 최하위 점수를 결과에 추가
    result.push(hallOfFame[hallOfFame.length - 1]);
  }

  return result;
}
