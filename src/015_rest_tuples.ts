const sumAllNumbers = (...xs: number[]): number => {
  return xs.reduce((s, n) => s + n, 0);
};

console.log(sumAllNumbers(1, 2, 4, 5));

// tuples rest
const makeRange = (...args: [start: number, end: number, step?: number]) => {
  const [start, end, step = 1] = args;
  const out: number[] = [];
  for (let n = start; n <= end; n += step) out.push(n);
  return out;
};

console.log(makeRange(1, 5));
console.log(makeRange(2, 10, 2));
// console.log(makeRange(1)); // error

function draw(x: number, y: number) {
  console.log(x, y);
}

// const points = [10, 20];
// draw(...points); // this is not fixed / tuple
const pointsFixed = [10, 20] as const;
draw(...pointsFixed); // now its fixed and can be used
