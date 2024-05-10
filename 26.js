function solution(absolutes, signs) {
  // 1. return해야 하는 answer 생성
  var answer = 0;

  // 2. 불리언 값을 1과 -1로 바꿈
  let newSigns = signs.map((bool) => {
    if (bool) {
      return 1;
    } else {
      return -1;
    }
  });

  // 3. 두 배열의 각 값을 곱해서 양수 음수로 바꿈
  let resultArray = absolutes.map((value, index) => value * newSigns[index]);
  // 4. 배열의 값들을 더함
  for (let i = 0; i < resultArray.length; i++) {
    answer += resultArray[i];
  }
  return answer;
}
