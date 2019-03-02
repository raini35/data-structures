function solveCountingBits(n) {
  let output = new Array(n + 1);
  output[0] = 0;
  let powerOf2 = 1;

  for(let i = 1; i <= n; i++) {
    if(powerOf2 * 2 == i) {
      powerOf2 *= 2;
    }

    output[i] = output[i - powerOf2] + 1;
  }

  return output;
}

console.log(solveCountingBits(4));