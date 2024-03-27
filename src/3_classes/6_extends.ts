type PaymentStatus = 'new' | 'paid';

class Payment {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid';
    }
}

class PersistedPayment extends Payment{
    databaseID: number;
    paidAt?: Date;

    constructor(id: number) {
        // вызов super - вызов конструктора родителя
        super(id);
        this.databaseID = id + Date.now();
    }

    save() {}

    // override используется что бы можно было переопределить метод родителя
    // переопределять метод можно и без этого ключевого слова, НО
    // без ключевого слова override не понятно, это метод данного класса или его родителя
    override pay() {
        //у super мы можем получить методы родителя
        super.pay();
        this.paidAt = new Date();
    }
}

class User {
    name: string = 'user';

    constructor() {
        console.log(this.name);
    }
}

class Admin extends User{
    name: string = 'admin';

    constructor() {
        //super должен идти первым
        super();
        console.log(this.name);

        //в данном случае super может быть вызван в конце
        /* 
        console.log('admin');
        super();
         */
    }
}

new Admin(); // вызовется 'user' 'admin'

// Порядок инициализации классов по умолчанию

// 1.Инициализируются свойства родительского класса
// 2.Вызывается конструктор родительского класса
// 3.Инициализируются свойства класса наследника
// 3.Вызывается конструктор класса наследника

//              НО
// Если в конструкторе класса наследника мы не используем поля или методы родительского класса, 
// и не используем this то, мы можем вызвать super вконце конструктора и тогда:
// 1.Инициализируются свойства класса наследника
// 2.Вызывается конструктор класса наследника
// 3.Инициализируются свойства родительского класса
// 3.Вызывается конструктор родительского класса


class HttpError extends Error {
    code: number;

    constructor(message: string, code: number = 500) {
        super(message);
        this.code = code;
    }
}


export {};