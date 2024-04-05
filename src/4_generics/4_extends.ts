function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
   
let x = { a: 1, b: 2, c: 3, d: 4 };
   
getProperty(x, "a");
//getProperty(x, "m"); ОШИБКА
getProperty({name: 'ivan', age: 123}, 'age')

export {};