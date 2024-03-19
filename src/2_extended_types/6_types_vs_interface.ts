//При создании интерфейса с таким же именем, происходит объединение интерфейсов

interface IRecipe {
    title: string
}

interface IRecipe {
    ingredients: string[]
}

const recipe:IRecipe = {
    title: 'Борщ',
    ingredients: ['Картошка', 'Свекла', 'Мясо']
}

//По возможности лучше так не делать.

//В свою очередь Type так не умеет делать. Будет ошибка

type TRecipe = {
    title: string
}

/* type TRecipe = {               // Будет ошибка
    ingredients: string[]       
} */

//Но type позволяет указать принадлежность к одному из типов

type TState = string | number

//interface IState = string | number  // Не работает
//interface IState:  string | number  // Не работает

//Используем type для указание пренадлежности к нескольким типам
//Используем interface для типизации классов или объектов