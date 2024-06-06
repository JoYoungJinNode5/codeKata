function solution(s) {
  var answer = "";
  let a;
  let b;
  if (s.length % 2 === 0) {
    a = s.length / 2 - 1;
    b = s.length / 2 + 1;
  } else {
    a = Math.floor(s.length / 2);
    b = a + 1;
  }
  answer = s.substring(a, b);
  return answer;
}
