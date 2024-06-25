function solution(numbers) {
  let result = new Set(); // 중복을 허용하지 않는 Set 사용

  // 모든 조합의 수를 더하여 Set에 추가
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.add(numbers[i] + numbers[j]);
    }
  }

  // Set의 모든 요소를 배열로 변환하고 오름차순으로 정렬
  return Array.from(result).sort((a, b) => a - b);
}
