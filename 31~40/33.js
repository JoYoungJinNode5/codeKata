function solution(left, right) {
  let answer = 0;

  //left에서 시작해서 right로 끝나는 for문 작성
  for (let i = left; i <= right; i++) {
    // 찾아보니 제곱근이 정수면 약수의 개수가 홀수였다. ex) 16=5, 25=3
    //Number.isInteger로 갑이 정수인지 아닌지 확인
    //Math.sqrt로 값의 제곱근 출력
    //따라서 제곱근이 정수(true)면 빼고 정수가 아니면(false) 더한다
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}
