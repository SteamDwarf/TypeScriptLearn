interface User {
    name: string
    email: string
}

interface Admin {
    name: string,
    role: number
}

function userToAdmin(user: User): Admin {
    return {
        name: user.name,
        role: 1
    }
}

export {};