function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(2016, a - 1, b); // JavaScript의 월은 0부터 시작하므로 a-1로 설정
  const dayName = days[date.getDay()];
  return dayName;
}
