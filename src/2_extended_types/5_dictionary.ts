type User = {
    name: string,
    age: number
    skills: string[]
}

//Использование interface, type или Record для реализации словаря. Например id: user
interface IUserDict {
    [id: number]: User
}

type TUserDict = {
    [id: number]: User
}

type RUserDict = Record<number, User>

const user = {
    id: 1,
    name: 'Ivan',
    age: 20,
    skills: ['CSS', 'JS', 'HTML']
}

const user2 = {
    id: 2,
    name: 'Petr',
    age: 22,
    skills: ['CSS', 'JS', 'HTML']
}

const userDictI: IUserDict = {
    [user.id]: user,
    [user2.id]: user2,

}

const userDictT: TUserDict = {
    [user.id]: user,
    [user2.id]: user2,
}

const userDictR: RUserDict = {
    [user.id]: user,
    [user2.id]: user2,
}

export {};