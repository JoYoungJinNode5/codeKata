function solution(cards1, cards2, goal) {
  let index1 = 0; // cards1의 현재 위치
  let index2 = 0; // cards2의 현재 위치

  for (let word of goal) {
    if (index1 < cards1.length && cards1[index1] === word) {
      index1++;
    } else if (index2 < cards2.length && cards2[index2] === word) {
      index2++;
    } else {
      return "No"; // goal 배열의 단어를 cards1 또는 cards2에서 순서대로 찾을 수 없으면 "No" 반환
    }
  }
  return "Yes"; // 모든 단어를 순서대로 사용할 수 있으면 "Yes" 반환
}
