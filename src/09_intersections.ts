// value must be everything from A and from B
type Inter1 = { id: string };
type Inter2 = { createdAt: Date };

type Entity = Inter1 & Inter2; // this must have both id and createdAt

const e: Entity = { id: "e1", createdAt: new Date() }; // must include both

// user
type Username = { username: string };
type UserEmail = { email: string };
type UserProfile = Username & UserEmail;
const user: UserProfile = { username: "piyushbaniya", email: "yoyo@gmail.com" };

// doesn't merge conflicting property types

type numberHolderUnique = { a: number };
type stringHolderUnique = { a: string };

type NumberStringMix = numberHolderUnique & stringHolderUnique;
// const bad : NumberStringMix = {a: 123} // nahhh

type Product = { id: string; title: string };
type Priced = { price: number };

type PricedProduct = Product & Priced;
