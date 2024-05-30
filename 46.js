function solution(s) {
  //숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
  //영단어를 인식하는 함수
  //영단어를 숫자로 변환하는 함수
  // 숫자와 영단어의 대응 표
  const numWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // 영단어를 키로, 숫자를 값으로 가지는 객체 생성
  const numWordsMap = {};
  numWords.forEach((word, index) => {
    //word를 키로 index를 값으로 하는 객체타잎을 생성
    numWordsMap[word] = index;
  });

  // 주어진 문자열에서 영단어를 숫자로 변환
  let result = s;
  for (const word in numWordsMap) {
    // 정규 표현식을 사용하여 영단어를 숫자로 변환
    const regex = new RegExp(word, "g");
    result = result.replace(regex, numWordsMap[word]);
  }

  // 숫자 문자열을 숫자로 변환하여 반환
  return Number(result);
}
