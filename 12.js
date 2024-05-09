function solution(arr) {
  var answer = 0;
  answer = arr.reduce((acc, val) => acc + val) / arr.length;
  return answer;
}
