interface User {
    name: string
}

const a: unknown = {name: 'Ivan'};

// Функции assert похожи на TypeGuard но они проверяет тип по другому
// - assert функцию не нужно вызывать в if
// - при успехе возвращает void
// - при неуспехе выбрасывает ошибку
function assertUser(x: unknown): asserts x is User{
    if(typeof x === 'object' && !!x && 'name' in x) {
        return;
    }
    throw new Error('Не пользователь')
}

assertUser(a);
console.log(a.name);

export {};