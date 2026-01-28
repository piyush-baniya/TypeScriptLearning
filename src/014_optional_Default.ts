function greetPersonOptional(name?: string): string {
  const upperResult = name?.toUpperCase();
  // const upperResult = name ? name?.toUpperCase() : "Guest";

  return `Hello ${upperResult}`;
}

console.log(greetPersonOptional("piyush"));
// console.log(greetPersonOptional()); // undefined case woah !!

function greetPersonDefault(name: string = "guest"): string {
  const upperResult = name.toUpperCase();
  return `Hello ${upperResult}`;
}
console.log(greetPersonDefault("Dipson"));
// console.log(greetPersonDefault()); // No undefined case woah !!

function connect(host: string, port?: number, secure?: boolean) {
  const p = port ?? 80;
  const s = secure ?? false;

  return `Connect ${host} ${p} ${s}`;
}

console.log(connect(`LocalHost`));
console.log(connect(`LocalHost`, 100, true)); // ordering matters
