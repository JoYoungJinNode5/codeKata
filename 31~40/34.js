function solution(s) {
  var answer = "";
  // 문자열 쪼개서 배열로 만들기
  let arr = s.split("");
  // sort에 매개변수 a, b를 써서 내림차순으로 정렬한다.
  arr.sort((a, b) => {
    // 만약 a와 b의 문자크기에 상관없이(둘 다 대문자로 맞췄으니) 문자가 동일하다면 charCodeAt써서 유니코드 값을 비교해 대문자를 뒤에 배치한다.
    // if (a.toUpperCase() === b.toUpperCase()) {
    //charCodeAt는 지정된 위치의 문자의 유니코드 코드 포인트를 나타낸다. 대문자는 항상 소문자보다 값이 작다.
    //또한 여기서 b -a 를 함으로 sort식에 따라 식이 양수가 나오면 두 번쨰 요소가 뒤로 간다.
    //아니 근데 이럴거면 굳이 if쓸 필요있나? charCodeAt로 어차피 구분되는데?
    return b.charCodeAt() - a.charCodeAt();
    // } else {
    // }
  });
  //배열을 다시 문자열로 합친다.
  answer = arr.join("");

  return answer;
}
