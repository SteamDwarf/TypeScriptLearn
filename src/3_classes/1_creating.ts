class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// 2-й вариант инициализации полей
class User2 {
    constructor(
        public name: string
    ){}
}

const user = new User('Ivan');
const user2 = new User2('Petr');

user.name;
user2.name

// Если мы не хотим создавать поле через конструктор, то можно поставить ! после названия поля
// Или можем в tsconfig параметр strictPropertyInitialization установить в false
class Admin {
    role!: number;
}

export {};