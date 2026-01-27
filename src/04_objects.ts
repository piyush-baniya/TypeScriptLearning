type User = {
  id: string; // required property
  name: string;
  email?: string; // optional property | email may be absent but if it is present it will be string
  readonly createdAt: Date; // cannot be reassigned
};

// must follow the types of User
const user1: User = {
  id: "u1",
  name: "piyush",
  createdAt: new Date(),
};

// const user2: User = {
//   id: 2,
//   name: "sangam",
//   email: "bblbala@gmail.com",
//   createdAt: new Date(),
// }; // error why? because id must be string

// user2.createdAt = new Date(); // Cannot assign to 'createdAt' because it is a read-only property.

type User2 = {
  email?: string; // optional property
};

type User3 = {
  email: string | undefined; // mandatory but it can be string or undefined
};
