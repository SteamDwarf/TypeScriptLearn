"use strict";
exports.__esModule = true;
function logMiddleware(data) {
    console.log(data);
    return data;
}
logMiddleware(123);
logMiddleware('123');
logMiddleware({ name: 'Ivan', age: 25 });
function splitBy2(array) {
    var middle = array.length / 2;
    return [array.slice(0, middle), array.slice(middle)];
}
console.log(splitBy2([1, 2, 3, 4, 5, 6]));
console.log(splitBy2(['hello', 'how', 'are', 'you', 'guy']));
