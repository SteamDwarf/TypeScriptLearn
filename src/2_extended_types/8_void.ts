//В TypeScript если функция ничего не возвращает, то она возвращает void
// void отличается от undefined

function logId(id: number) {
    console.log(id)
}

const a = logId(1);

// Если функция хотя бы при одном каком либо условии что то возвращает, а в других случаях нет,
// то в этих случаях мы получим undefined
function multiply(a: number, b?: number) {
    if(b) return a * b;
}

type voidFunc = () => void;

//Если мы указали явно что функция возвращает void, то что бы мы из нее не возвращали, 
// она будет возвращать void
// Благодаря void мы можем данный тип указывать любым функциям, 
// если нам не важно что данная функция возвращает
const f2: voidFunc = () => {
    return true
}

const b = f2();

export {};