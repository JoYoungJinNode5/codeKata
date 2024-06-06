function solution(n) {
  var answer = 0;
  let x = String(n);
  for (i = 0; i < x.length; i++) {
    answer += parseInt(x[i]);
  }
  return answer;
}
