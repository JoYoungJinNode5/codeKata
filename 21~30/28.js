function solution(numbers) {
  // 0부터 9까지의 숫자가 모두 포함된 배열
  const allNumbers = new Set([...Array(10).keys()]);
  // 주어진 배열 numbers를 Set으로 변환
  const givenNumbers = new Set(numbers);
  // allNumbers에서 givenNumbers를 뺀 숫자들의 합을 계산
  let sum = 0;
  allNumbers.forEach((num) => {
    if (!givenNumbers.has(num)) {
      sum += num;
    }
  });
  return sum;
}
