function solution(n) {
  //10진법 숫자를 3진법 문자열로 변환
  function decimalToTernary(n) {
    let ternary = "";
    while (n > 0) {
      ternary = (n % 3).toString() + ternary;
      n = Math.floor(n / 3);
    }
    return ternary;
  }

  // 3진법 문자열을 뒤집기
  const ternaryStr = decimalToTernary(n);
  const reversedTernaryStr = ternaryStr.split("").reverse().join("");

  // 뒤집어진 3진법 문자열을 10진법 숫자로 변환
  const reversedDecimal = parseInt(reversedTernaryStr, 3);

  return reversedDecimal;
}
