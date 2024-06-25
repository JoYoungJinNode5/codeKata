function solution(a, b, n) {
  let totalColas = 0;
  let emptyBottles = n;

  while (emptyBottles >= a) {
    let newColas = Math.floor(emptyBottles / a) * b; // 교환하여 받는 콜라 수
    totalColas += newColas; // 받은 콜라 수를 누적
    emptyBottles = newColas + (emptyBottles % a); // 새로운 빈 병 수 (교환 후 남은 빈 병 수 포함)
  }

  return totalColas;
}
