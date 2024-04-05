function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

logMiddleware<number>(123);
logMiddleware<string>('123');
logMiddleware({name: 'Ivan', age: 25})

function splitBy2<T>(array: Array<T>): Array<Array<T>> {
    const middle = array.length / 2
    return [array.slice(0, middle), array.slice(middle)];
}

console.log(splitBy2([1, 2, 3, 4, 5, 6]));
console.log(splitBy2(['hello', 'how', 'are', 'you', 'guy']));

export {};