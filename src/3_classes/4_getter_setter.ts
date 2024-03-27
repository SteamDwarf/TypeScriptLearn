class User {
    _login: string = '';
    _password: string = '';

    // getter и setter зависимы между собой
    // setter должен получать значение того же типа что и возвращает getter
    // getter и setter не могут быть асинхронными
    set login(l: string) {
        this._login = 'user-' + l;
    }

    get login() {
        return this._login;
    }

}

const user = new User();
user.login = 'ivan_007' //user-ivan_007

export {};