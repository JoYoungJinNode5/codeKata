function solution(sizes) {
  // 각 명함의 가로 길이와 세로 길이를 정렬
  const rotatedSizes = sizes.map(([width, height]) => [
    Math.max(width, height),
    Math.min(width, height),
  ]);

  // 가로 길이 중 최대값과 세로 길이 중 최대값을 찾기
  const maxWidth = Math.max(...rotatedSizes.map(([width, height]) => width));
  const maxHeight = Math.max(...rotatedSizes.map(([width, height]) => height));

  // 지갑의 크기 계산
  const answer = maxWidth * maxHeight;
  return answer;
}
