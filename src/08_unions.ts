// value -> this or that

// function printId(id: string | number) {
//   if (typeof id === "string") {
//     id.toUpperCase();
//   } else {
//     id.toFixed(2);
//   }
// }

// object union
type Admin = {
  role: "Admin";
  permissions: string[];
};

type Customer = {
  role: "Customer";
  loyaltyPoints: number;
};

function DescribeUser(u: Admin | Customer) {
  if (u.role === "Admin") {
    // do this
    console.log(u.permissions);
  } else {
    // do that
    console.log("Woahhhh typescript doesn't know permissions");
  }
}

function DescribeUserWithInOperator(u: Admin | Customer) {
  if ("permissions" in u) {
    console.log(u.permissions);
  } else {
    console.log(u.loyaltyPoints);
  }
}

// array of unions and unions of arrays
const arrayOfUnion: (string | number)[] = ["a", 1, "b", "2"]; // can be both string and number

const unionOfArrays: string[] | number[] =
  Math.random() > 0.1 ? ["string", "String2"] : [1, 2, 3];
// either all number or all string

// unionOfArrays.push("a") // can't push
