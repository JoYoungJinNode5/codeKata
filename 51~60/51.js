function solution(food) {
  // 음식 배치를 저장할 배열을 초기화
  let result = [];

  // 음식의 종류를 순회하며 각각의 음식을 반으로 나누어 두 선수에게 배치
  for (let i = 1; i < food.length; i++) {
    let count = Math.floor(food[i] / 2); // 현재 음식의 반 개수를 구함
    for (let j = 0; j < count; j++) {
      result.push(i); // 선수 1에게 배치
    }
  }

  // 중간에 물(0번 음식)을 배치
  result.push(0);

  // 같은 음식을 뒤집어서 추가하여 선수 2에게 배치
  for (let i = food.length - 1; i > 0; i--) {
    let count = Math.floor(food[i] / 2); // 현재 음식의 반 개수를 구함
    for (let j = 0; j < count; j++) {
      result.push(i); // 선수 2에게 배치
    }
  }

  // 결과 배열을 문자열로 변환하여 반환
  return result.join("");
}
