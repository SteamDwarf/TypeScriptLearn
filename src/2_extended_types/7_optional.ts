
interface User {
    login: string
    name?: {
        firstName: string,
        lastName: string
    }
    password: string
}

const user: User = {
    login: 'ivan123',
    password: 'qwerty'
}

function multiply(a: number, b?: number) {
    return b ?  a * b : a * a;
}

multiply(1)
multiply(1, 2)

function testPass(user: User) {
    //Если name не undefined получим lastName иначе просто вернется undefined
    const lastName = user.name?.lastName; 

    //Уверяем компилятор, что поле name 100% будет не undefined
    const firstNamne = user.name!.lastName; 
}

function test(param?: string) {
    // Оператор ?? - Если левое значение null или undefined, 
    // то возвращает правое, 
    // иначе возвращает левое значение
    return param ?? 'ok'
}

export {};
