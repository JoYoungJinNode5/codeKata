function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let count = 0;

  // nums 배열에서 3개의 숫자를 고르는 모든 조합을 생성
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        // 합이 소수인지 확인
        if (isPrime(sum)) {
          count++;
        }
      }
    }
  }

  return count;
}
