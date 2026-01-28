// tuples -> fixed length and fixed types
// not same as (string | number)[]

const userEntry: [string, number] = ["piyush", 19]; // first element must be string and second must be number. it cannot interchange. Also indexing matters here. you cannot add extra element. Must be fixed length

type ResponseRow = [status: number, message?: string]; // optional tuples

const r11: ResponseRow = [200];
const r21: ResponseRow = [200, "yoyo this is string"];

const corners: readonly [number, number] = [0, 0];
