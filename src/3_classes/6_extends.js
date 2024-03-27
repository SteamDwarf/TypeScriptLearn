"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Payment = /** @class */ (function () {
    function Payment(id) {
        this.status = 'new';
        this.id = id;
    }
    Payment.prototype.pay = function () {
        this.status = 'paid';
    };
    return Payment;
}());
var PersistedPayment = /** @class */ (function (_super) {
    __extends(PersistedPayment, _super);
    function PersistedPayment(id) {
        var _this = 
        // вызов super - вызов конструктора родителя
        _super.call(this, id) || this;
        _this.databaseID = id + Date.now();
        return _this;
    }
    PersistedPayment.prototype.save = function () { };
    // override используется что бы можно было переопределить метод родителя
    // переопределять метод можно и без этого ключевого слова, НО
    // без ключевого слова override не понятно, это метод данного класса или его родителя
    PersistedPayment.prototype.pay = function () {
        //у super мы можем получить методы родителя
        _super.prototype.pay.call(this);
        this.paidAt = new Date();
    };
    return PersistedPayment;
}(Payment));
var User = /** @class */ (function () {
    function User() {
        this.name = 'user';
        console.log(this.name);
    }
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = this;
        console.log('123');
        _this = _super.call(this) || this;
        _this.name = 'admin';
        return _this;
    }
    return Admin;
}(User));
new Admin(); // вызовется 'user' 'admin'
