function solution(arr1, arr2) {
  let answer = [];
  // 행렬의 값을 각각 위치에 맞게 더해야된다.
  // 더한 것을 넣어줄 빈 행렬을 만들어야한다.
  for (let i = 0; i < arr1.length; i++) {
    //더한 값을 push할 빈 행렬 선언
    let sum = [];
    //for문으로 2개 돌려서 같은 자리의 값 더함 arr1[0]으로 둔 것은 인덱스 시작을 위해
    for (let j = 0; j < arr1[0].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }
  return answer;
}
