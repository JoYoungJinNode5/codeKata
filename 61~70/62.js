function solution(babbling) {
  // 조카가 발음할 수 있는 단어 목록
  const possibleWords = ["aya", "ye", "woo", "ma"];

  // 발음할 수 있는 단어의 개수를 세기 위한 변수
  let count = 0;

  // babbling 배열을 순회하면서 각 단어를 체크합니다.
  babbling.forEach((word) => {
    // 연속된 발음 체크를 위한 변수
    let previous = "";

    // 단어가 발음 가능한지 여부를 저장할 변수
    let isValid = true;

    // 단어의 길이가 0이 될 때까지 반복
    while (word.length > 0) {
      // 현재 단어에서 발음 가능한 단어를 찾습니다.
      let found = false;

      for (let i = 0; i < possibleWords.length; i++) {
        const possibleWord = possibleWords[i];

        // 현재 단어가 발음 가능한 단어로 시작하는지 확인합니다.
        if (word.startsWith(possibleWord)) {
          // 연속된 발음인지 확인합니다.
          if (previous === possibleWord) {
            isValid = false;
            break;
          }

          // 연속되지 않은 발음이라면 단어에서 제거하고 previous 업데이트
          word = word.slice(possibleWord.length);
          previous = possibleWord;
          found = true;
          break;
        }
      }

      // 발음 가능한 단어를 찾지 못했으면 유효하지 않은 단어로 판단
      if (!found) {
        isValid = false;
        break;
      }
    }

    // 유효한 단어라면 count를 증가
    if (isValid) {
      count++;
    }
  });

  return count;
}
