function solution(arr) {
  var answer = [];
  // 1. 배열 길이가 1이하일 때 -1을 반환하는 함수 생성
  if (arr.length <= 1) {
    return [-1];
  } else {
    // 2. 배열에서 가장 작은 수를 indexOf로 찾아내 splice로 '하나' 도려냄
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    answer = arr;
  }

  return answer;
}
