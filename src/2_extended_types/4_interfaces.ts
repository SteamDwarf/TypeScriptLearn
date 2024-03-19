interface IUser {
    name: string
    age: number
    skills: string[]
}

interface IRole {
    roleId: number
}

//Объединение интерфейсов
interface UserWithRole extends IUser, IRole {}

export {};