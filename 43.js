function solution(t, p) {
  let count = 0;
  const pNum = parseInt(p);
  const len = p.length;

  // t에서 p와 같은 길이의 부분 문자열을 추출하여 비교
  for (let i = 0; i <= t.length - len; i++) {
    const subStr = t.substring(i, i + len); // 부분 문자열 추출
    const subNum = parseInt(subStr); // 부분 문자열을 숫자로 변환
    if (subNum <= pNum) {
      count++; // 부분 문자열이 p보다 작거나 같으면 count 증가
    }
  }

  return count;
}
