function solution(n) {
  let digits = String(n).split("");
  digits.sort((a, b) => b - a);
  return parseInt(digits.join(""));
}
