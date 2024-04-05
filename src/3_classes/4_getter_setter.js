"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User() {
        this._login = '';
        this._password = '';
    }
    Object.defineProperty(User.prototype, "login", {
        get: function () {
            return this._login;
        },
        // getter и setter зависимы между собой
        // setter должен получать значение того же типа что и возвращает getter
        // getter и setter не могут быть асинхронными
        set: function (l) {
            this._login = 'user-' + l;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User();
user.login = 'ivan_007'; //user-ivan_007
