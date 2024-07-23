function solution(number, limit, power) {
  // 약수의 개수를 구하는 함수
  function getDivisorCount(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (i * i === n) {
          count += 1;
        } else {
          count += 2;
        }
      }
    }
    return count;
  }

  let totalWeight = 0;

  for (let i = 1; i <= number; i++) {
    let divisorCount = getDivisorCount(i);
    if (divisorCount > limit) {
      totalWeight += power;
    } else {
      totalWeight += divisorCount;
    }
  }

  return totalWeight;
}
