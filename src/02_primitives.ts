let username: string = "Piyush";
let age: number = 40;
let isCreator: boolean = true;

const big: bigint = 2n ** 63n - 1n;
// const mixed = big + age; // Operator '+' cannot be applied to types 'bigint' and 'number'
const TOKEN: unique symbol = Symbol("TOKEN");

function yearsToDay(years: number): number {
  return years * 365;
}

console.log(username.toLowerCase());
console.log(yearsToDay(2));
