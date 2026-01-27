// Goal -> understand when to let TypeScript infer types
// ts knows js very well
// when ts will automatically write types / when we are going to write

let count = 0; // ts sees number
const youtubeChannel = "ThePTS"; // ts sees the exact literal "ThePTS"
const scores = [10,20,30];

// over annotation isn't bad -> just noisy

export function add(a : number,b : number) : number {
  return a + b;
}

// console.log(add("5",2)); // can't do this
console.log(add(5,2)); // type safety


// you should also annotate when the type is not obvious
let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10