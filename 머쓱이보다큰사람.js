function solution(array, height) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > height) {
      count++;
    }
  }
  return count;
}
