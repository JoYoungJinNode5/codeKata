function solution(s, n) {
  // 암호화된 결과를 저장할 변수
  let result = "";

  // 문자열의 각 문자를 순회
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // 문자가 대문자인 경우
    if (char >= "A" && char <= "Z") {
      result += String.fromCharCode(
        ((char.charCodeAt(0) - "A".charCodeAt(0) + n) % 26) + "A".charCodeAt(0)
      );
    }
    // 문자가 소문자인 경우
    else if (char >= "a" && char <= "z") {
      result += String.fromCharCode(
        ((char.charCodeAt(0) - "a".charCodeAt(0) + n) % 26) + "a".charCodeAt(0)
      );
    }
    // 문자가 알파벳이 아닌 경우 (그대로 유지)
    else {
      result += char;
    }
  }

  return result;
}
