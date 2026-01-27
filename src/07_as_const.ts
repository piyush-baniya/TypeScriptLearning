const ROLES = ["admin", "user", "operator"] as const;

// deriving union from array
type Role = (typeof ROLES)[number];

function setRole(r: Role) {
  console.log(r);
}

setRole("admin"); // we can only pass ROLES i.e "admin", "user", "operator" and not "operatorree"
