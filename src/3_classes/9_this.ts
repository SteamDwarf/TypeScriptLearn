//this ссылается на объект, запускающий метод
//У обычной функции [ this === undefined (strict) ] | [this === globalObj (window) (not strict)]
//У стрелочной [ this ===  globalObj (window) (strict | not strict) ]

//Если стрелочная функция внутри обычной функции то ее this === this функции обертки

function f() {
    console.log(this);
    return () => {
        return this;
    }
}

const b = () => {
    return this;
}

const a = f();
console.log(a())
console.log(b())


//Если обычная функция находится в объекте, то ее this === объект
//Если стрелочная функция находится в обычном объекте, то ee this === globalObj (window)
//Если стрелочная функция находится в объекте создаваемом с помощью класса или функции конструктора, то
//у нее this === объект



//this можно типизировать
class Payment {
    private date: Date = new Date();

    getDate(this: Payment) {
        return this.date;
    }

    getThis = () => {
        return this;
    }
}

const p = new Payment();

const user = {
    id: 1,
    //Такой вариант вызовет ошибку так как теряется контекст this
    //getPaymentDate: p.getDate

    //Правильный вариант
    getPaymentDate: p.getDate.bind(p),
    getThis: p.getThis,
    test: () => (this)
}

console.log(user.getPaymentDate())
console.log(user.getThis())
console.log(user.test())



export {};

