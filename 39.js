function solution(n, m) {
  //최대공약수는 같은 수로 나눴을떄 나머지가 0인것 중 가장 큰 수
  //최소공배수는 최대 공약수로 두 수를 나눈 값에 다 다시 최대공약수를 곱하면 된다.

  let maxValue = 1; // 최대공약수 초기값 설정. 1부터 시작
  let minValue;
  //for문 시작 1부터하고 n과 m중 더 작은 수까지 돌림
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      maxValue = i;
    }
  }
  minValue = (n * m) / maxValue;
  return [maxValue, minValue];
}
