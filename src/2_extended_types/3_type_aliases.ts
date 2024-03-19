//Union
type HTTPMethod = 'POST' | 'GET'

function fetchWithAuth2(url: string, method: HTTPMethod) {}

type User = {
    name: string,
    age: number
    skills: string[]
}

type Role = {
    id: number
}

//Intersection 
type UserWithRole = User & Role;

let user: UserWithRole = {
    id: 123,
    name: 'Ivan',
    age: 20,
    skills: ['CSS', 'JS', 'HTML']
}

// Но лучше делать так. Потому что скорее всего у пользователя тоже будет id и при Intersection 
// останется только одно поле id от User или Role

type UserWithRole2 = {
    user: User,
    role: Role
}

let user2: UserWithRole2 = {
    user: {
        name: 'Ivan',
        age: 20,
        skills: ['CSS', 'JS', 'HTML']
    },
    role: {
        id: 123
    }
}

export {};
