//You can init arrays and tuples only for read

const a: readonly number[] = [1, 2, 3]
// a.push(5) ERROR
// a[0] = 10; ERROR

const b: readonly [number] = [1];
//b[0] = 10; ERROR


const c: ReadonlyArray<number> = [1, 2, 3]
// c.push(5) ERROR
// c[0] = 10; ERROR

export {};