let title: string = "intro";
// title = undefined; // strictNullChecks // due to "strict": true in tsconfig.json

let subtitle: string | undefined = "yoyo";

// void: function doesn't return a useful value
function log(message: string): void {
  console.log(message);
}

// never return
function fail(message: string): never {
  throw new Error(message);
}

// DO NOT USE ANY -> TRY TO IGNORE AS MUCH AS POSSIBLE
const valueAny: any = JSON.parse(`{"x" :1}`); // ❌

valueAny.notThere.toFixed(2); // this will still compile but can break/explode at runtime
