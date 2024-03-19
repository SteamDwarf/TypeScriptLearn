enum StatusCode {
    SUCCESS = 0,
    IS_LOADING = 'l',
    FAILED = 'f'
}

const res = {
    message: 'It`s OK',
    statusCode: StatusCode.SUCCESS
}

if(res.statusCode === StatusCode.SUCCESS) {

}

//If we use combined enum we can make mistakes, better use one type for values

const action = (status: StatusCode) => {

}

action(0);
//action('f'); ERROR

//Обычные enum преобразуются в js функции
//Если нужно больше производительности, то можно использовать константные enum
const enum Roles {
    ADMIN = 1,
    USER = 2
}

const admin = Roles.ADMIN;