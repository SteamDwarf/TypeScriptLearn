let a: any;

a = [1, 2, 3]

let b: number[] = a;

// unknown указывает на то, что в переменной хранится значение неизвестного типа, но не any

let c: unknown;

c = 10;
c = [1, 2, 3]

//Значение из unknown переменной мы не можем поместить в переменную с определенным типом,
// пока не приведем значение unknown к определенному типу

//let d: number[] = c; // ОШИБКА

//Значение из unknown можем положить либо в any либо в unknown 
let e: any = c;
let f: unknown = c;

//Что бы работать со значением unknown необходимо определить его тип
if(typeof c == 'number') {
    c++;
}

// Или определить принадлежность к какому то классу
try {

} catch(error) {

    //Безопасный вариант
    if(error instanceof Error) {
        console.log(error.message);
    }

    //Опасный вариант
    const err = error as Error;
    console.log(err.message);
}

//Union с unknown - всегда unknown
type un = unknown | string

//Intersection unknown c другим типом - всегда другой тип
type int = unknown & string
type int2 = unknown & undefined


export {};
