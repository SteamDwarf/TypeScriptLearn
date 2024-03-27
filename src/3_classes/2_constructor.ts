// Конструктор запускается при использовании ключевого слова new
// Конструктор всегда возвращает экземпляр класса. Мы это никак изменить не можем
// Конструктор не может принимать generic
// Мы можем выполинть перегрузку конструктора

class User {
    name!: string;
    age!: number;

    //конструкторы перегрузки
    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);

    //конструктор реализации/имплементации
    constructor(info?: string | number, age?: number) {
        if(typeof info === 'string') {
            this.name = info;
        }else if(typeof info === 'number') {
            this.age == info;
        }

        if(age) {
            this.age = age;
        }
    }
}

class Vector {
    x: number;
    y: number;
    z!: number;

    // Конструкторы перегрузки содержат только параметры и нужно создать столько конструкторов перегрузки,
    // сколько есть возможных вариантов инициализации объекта класса
    constructor(x: number, y: number);
    constructor(x: number, y: number, z?: number);

    // Конструктор реализации содержит все возможные передаваемые параметры и 
    // содержит логику инициализации класса
    constructor(x: number, y: number, z?: number) {
        this.x = x;
        this.y = y;

        if(z) {
            this.z = z;
        }
    }
}


const user = new User();
const user1 = new User('Ivan');
const user2 = new User(23);
const user3 = new User('Ivan', 23);

const pos = new Vector(1, 2)

export {};