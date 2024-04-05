function toString<T>(data: T): string | undefined {
    if(typeof data === 'object' && data !== null) return JSON.stringify(data);
    if(data?.toString) return data.toString();
}

console.log(toString(1));
console.log(toString({a: 23}));
console.log(toString([1, 2, 3]));
console.log(toString('123'));
console.log(toString(null));
console.log(toString(undefined));

export {};