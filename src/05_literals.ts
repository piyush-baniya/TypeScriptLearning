type Direction = "left" | "right" | "up";

function move(d: Direction) {
  console.log(d);
}

const d1 = "left"; // ts keeps literal type "left"
move(d1);

let d2 = "left";
// move(d2); // ts widens to string

let d3: Direction = "left";
move(d3); // this now works
