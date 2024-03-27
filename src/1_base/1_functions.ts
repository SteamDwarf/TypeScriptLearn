//Function Declaration
function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
}

//Arrow Function
const getFullNameArrow = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`
}


// Можно выполнять перегрузку фукнций и одна и та же функция сможет принимать разные аргументы
// и возвращать разные данные

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
    return distance;
}