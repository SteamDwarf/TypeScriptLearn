"use strict";
exports.__esModule = true;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Holded"] = "\u0423\u0434\u0435\u0440\u0436\u0430\u043D";
    PaymentStatus["Processed"] = "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D";
    PaymentStatus["Canceled"] = "\u041E\u0442\u043C\u0435\u043D\u0435\u043D";
})(PaymentStatus || (PaymentStatus = {}));
var Payment = /** @class */ (function () {
    function Payment(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date;
        this.id = id;
    }
    Payment.prototype.getPaymentLifeTime = function () {
        return new Date().getMilliseconds() - this.createdAt.getMilliseconds();
    };
    Payment.prototype.cancelPayment = function () {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен!');
        }
        this.status = PaymentStatus.Canceled;
        this.updatedAt = new Date();
    };
    Payment.prototype.proccessPayment = function () {
        if (this.status === PaymentStatus.Canceled) {
            throw new Error('Платеж был отменен!');
        }
        this.status = PaymentStatus.Processed;
        this.updatedAt = new Date();
    };
    Payment.prototype.toString = function () {
        return "\u041F\u043B\u0430\u0442\u0435\u0436: ".concat(this.id, "\n\u0421\u0442\u0430\u0442\u0443\u0441: ").concat(this.status, "\n\u0421\u043E\u0437\u0434\u0430\u043D: ").concat(this.createdAt, "\n").concat(this.updatedAt ? 'Обновлен ' + this.updatedAt : '');
    };
    return Payment;
}());
var payment = new Payment(1);
console.log(payment.toString());
payment.proccessPayment();
console.log(payment.toString());
console.log('Время обработки:', payment.getPaymentLifeTime());
var payment2 = new Payment(2);
console.log(payment2.toString());
payment2.cancelPayment();
console.log(payment2.toString());
console.log('Время обработки:', payment.getPaymentLifeTime());
