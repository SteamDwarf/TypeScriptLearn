//Сужение типов
function logID(id: string | number | symbol) {
    if(typeof id === 'string') {
        console.log('ID - строка: ' + id.toLowerCase())
    } else if(typeof id === 'symbol') {
        console.log('ID - символ: ' + id.toString())
    } else {
        console.log('ID - число: ' + id)
    }
}

//Проверка что передан массив
function logError(err: string | string[]) {
    if(Array.isArray(err)) {
        console.log('Ошибки: ' + err.join(';\n'))
    } else {
        console.log('Ошибка: ' + err)
    }
}

//Определение принадлежности объекта к определенному интерфейсу
function logObject(obj: {a: number} | {b: number}) {
    if('a' in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b)
    }
}