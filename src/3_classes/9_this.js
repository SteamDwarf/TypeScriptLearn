"use strict";
//this ссылается на объект, запускающий метод
//У обычной функции [ this === undefined (strict) ] | [this === globalObj (window) (not strict)]
//У стрелочной [ this ===  globalObj (window) (strict | not strict) ]
var _this = this;
exports.__esModule = true;
//Если стрелочная функция внутри обычной функции то ее this === this функции обертки
function f() {
    var _this = this;
    console.log(this);
    return function () {
        return _this;
    };
}
var b = function () {
    return _this;
};
var a = f();
console.log(a());
console.log(b());
//Если обычная функция находится в объекте, то ее this === объект
//Если стрелочная функция находится в обычном объекте, то ee this === globalObj (window)
//Если стрелочная функция находится в объекте создаваемом с помощью класса или функции конструктора, то
//у нее this === объект
//this можно типизировать
var Payment = /** @class */ (function () {
    function Payment() {
        var _this = this;
        this.date = new Date();
        this.getThis = function () {
            return _this;
        };
    }
    Payment.prototype.getDate = function () {
        return this.date;
    };
    return Payment;
}());
var p = new Payment();
var user = {
    id: 1,
    //Такой вариант вызовет ошибку так как теряется контекст this
    //getPaymentDate: p.getDate
    //Правильный вариант
    getPaymentDate: p.getDate.bind(p),
    getThis: p.getThis,
    test: function () { return (_this); }
};
console.log(user.getPaymentDate());
console.log(user.getThis());
console.log(user.test());
