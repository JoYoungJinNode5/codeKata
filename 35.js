function solution(price, money, count) {
  let answer = 0;
  //price를 count까지의 수를 곱해서 더하고 money에서 뺀다
  //for문을 생각해볼 필요가 있다
  for (i = 1; i <= count; i++) {
    answer += i * price;
  }
  answer -= money;
  //리턴값이 0보다 크지 않으면 0 출력
  return answer > 0 ? answer : 0;
}
