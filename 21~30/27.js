function solution(phone_number) {
  // phone_number의 길이를 구합니다.
  const length = phone_number.length;

  // 뒤에서 4자리를 제외한 나머지 자리를 '*'로 대체합니다.
  const hiddenPart = "*".repeat(length - 4);

  // 뒷 4자리를 추출합니다.
  const visiblePart = phone_number.slice(length - 4);

  // 두 부분을 결합하여 결과를 반환합니다.
  return hiddenPart + visiblePart;
}
