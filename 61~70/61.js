function solution(lottos, win_nums) {
  // 0의 개수와 맞힌 번호의 개수를 세기 위한 변수
  let zeroCount = 0;
  let matchCount = 0;

  // lottos 배열을 순회하면서 0의 개수와 맞힌 번호의 개수를 셉니다.
  lottos.forEach((num) => {
    if (num === 0) {
      zeroCount++;
    } else if (win_nums.includes(num)) {
      matchCount++;
    }
  });

  // 최고 순위는 맞힌 번호의 개수에 0의 개수를 더한 값으로 계산
  const maxRank = getRank(matchCount + zeroCount);
  // 최저 순위는 맞힌 번호의 개수만으로 계산
  const minRank = getRank(matchCount);

  return [maxRank, minRank];
}

// 순위를 계산하는 함수
function getRank(matchCount) {
  switch (matchCount) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}
