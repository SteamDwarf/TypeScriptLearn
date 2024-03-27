// Может появиться необходимость сделать композицию наскольких классов
class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }
}

class Payment {
    id: number;
    status: 'succees' | 'failed' | 'holded' = 'holded'

    constructor(id: number) {
        this.id = id;
    }
}

// Мы можем захотеть сделать класс пользователя к которому привязан платеж
// Первое что может прийти на ум - создать класс, наследующийся от Payment

class BadUserWithPayment extends Payment {
    userId: number;
    name: string;

    constructor(id: number, userId: number, name: string) {
        super(id);
        this.userId = userId;
        this.name = name;
    }
}

// Но мы можем унаследоваться только от одного класса и таким образом 
// какой то из классов не будем связан с текущим
// Также возможен конфликт полей/методов

// Поэтому лучше использовать такой вариант

class UserWithPayment {
    user: User;
    payment: Payment;

    constructor(user: User, payment: Payment){
        this.user = user;
        this.payment = payment;
    }
}


export {};