//В данном случае мы указываем что функция никогда не вернет значение

function generateError(message: string):never {
    throw new Error(message);
}

function infiniteLoop():never {
    while(true){}
}

function recurs():never {
    recurs();
}

//Переменным с типом never нельзя ничего присвоить
let a: never;

a = undefined;

let b: void;

b = undefined;

// На примере ниже мы можем увидеть, что если мы не предусмотрели обработку всех вариантов типов аргумента, 
// то присвоив к переменной never мы получим ошибку, тем самым сможем отловить необработанный тип
type PaymentAction = 'refund' | 'checkout';

function processAction(action: PaymentAction) {
    switch(action) {
        case 'refund':
            break;
        case 'checkout':
            break;
        default:
            const _:never = action;
            throw new Error("Действие не определено!")
    }
}

type PaymentAction2 = 'refund' | 'checkout' | 'reject';

function processAction2(action: PaymentAction2) {
    switch(action) {
        case 'refund':
            break;
        case 'checkout':
            break;
        default:
            const _:never = action;
            throw new Error("Действие не определено!")
    }
}

// При исчерпывающей проверке такого вида, если мы не выкенем ошибку вконце, 
// то будет compile ошибка, так как не во всех случаях нам вернется boolean

// В runtime мы в качестве x можем передать любой тип и если он не попадет в одно из условий,
// то вернется undefined
function isString(x: string | number): boolean {
    if(typeof x === 'string') {
        return true
    } else if(typeof x === 'number') {
        return false;
    }

    throw new Error();
}


export {};
