function solution(sides) {
  sides.sort((a, b) => a - b); // 변들을 오름차순으로 정렬
  return sides[0] + sides[1] > sides[2] ? 1 : 2; // 삼각형의 조건 검사
}
