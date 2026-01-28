const ys: readonly number[] = [1, 2, 3]; // 1st way
const yss: ReadonlyArray<number> = [1, 2, 3, 4]; // 2nd way
const xss = [1, 2, 3, 4];
xss[0] = 9; // mutable
// yss.push(3) // cannot do this bcz readonly

function sum(nums: readonly number[]): number {
  let s = 0;
  for (const n of nums) s += n;
  return s;
}

console.log(sum(xss)); // passing mutable array in readonly param is allowed

const res = yss.map((n) => n * 0); // works bcz maps creates a new array
