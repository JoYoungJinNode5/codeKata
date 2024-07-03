function solution(n, k) {
  let sale = n / 10;
  return n * 12000 + (k - Math.floor(sale)) * 2000;
}
