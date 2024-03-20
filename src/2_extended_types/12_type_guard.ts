// Простой пример функции которая преверяет является ли параметр строкой
// Такой вариант функции позволяет typescript сужать типы
// Если бы функция просто возвращала boolean то сужение не происходило бы
function isString(x: string | number): x is string {
    return typeof x === 'string';
}

const a = 10;
const b = 'hello';

function prepare(x: string | number) {
    if(isString(x)) {
        return x.toLowerCase()
    } else {
        return x.toFixed(0);
    }
}

interface User {
    name: string
    email: string
}

interface Admin extends User{
    role: number
}


// Typeguard для объектов
function isAdmin(x: User | Admin): x is Admin {
    return 'role' in x;
}
function isAdminAlt(x: User | Admin): x is Admin {
    return (x as Admin).role !== undefined;
}

function setRoleGod(x: User | Admin) {
    if(isAdmin(x)) {
        x.role = 2
    } else {
        throw new Error('Вы не имеете прав!')
    }
}

export {};
