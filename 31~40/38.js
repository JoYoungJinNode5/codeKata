process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  //행렬에 관한 문제. for문을 2번 써야한다.
  //b만큼의 행을 가져야하기 떄문에 b부터 먼저한다.
  for (let i = 0; i < b; i++) {
    let line = "";
    for (let j = 0; j < a; j++) {
      line += "*";
    }
    console.log(line);
  }
});
