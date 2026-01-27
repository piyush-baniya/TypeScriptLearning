const raw = `{"id" : 1, "name" : "A"}`;

const riskyUser = JSON.parse(raw) as { id: number; name: string };

console.log(riskyUser.name); // this will still work but you should not do this

type User22 = { id: number; name: String };

function isUser(v: unknown): v is User22 {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof (v as any).id === "number" &&
    "name" in v &&
    typeof (v as any).name === "string"
  );
}

const maybe2 = JSON.parse(raw) as unknown;
if (isUser(maybe2)) {
  console.log(maybe2.name);
}
