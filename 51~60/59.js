function solution(n, m, section) {
    // section 배열을 오름차순으로 정렬
    section.sort((a, b) => a - b);

    let paintCount = 0;
    let i = 0;

    while (i < section.length) {
        // 현재 칠해야 하는 시작 구역
        let start = section[i];
        // 롤러로 칠할 수 있는 최대 범위 계산
        let end = start + m - 1;

        // 롤러로 칠할 수 있는 범위 내에 포함되는 구역 건너뛰기
        while (i < section.length && section[i] <= end) {
            i++;
        }
        
        // 페인트칠 횟수 증가
        paintCount++;
    }

    return paintCount;
}