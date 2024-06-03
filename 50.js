function solution(s) {
  let result = [];
  let lastSeen = {}; // 각 문자의 마지막 위치를 저장할 객체

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (lastSeen.hasOwnProperty(char)) {
      result.push(i - lastSeen[char]);
    } else {
      result.push(-1);
    }
    lastSeen[char] = i; // 현재 위치를 업데이트
  }

  return result;
}
