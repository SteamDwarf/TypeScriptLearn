enum PaymentStatus {
    Holded = 'Удержан',
    Processed = 'Выполнен',
    Canceled = 'Отменен'
}

class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.Holded;
    createdAt: Date = new Date;
    updatedAt?: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifeTime() {
        return new Date().getMilliseconds() - this.createdAt.getMilliseconds();
    }

    cancelPayment() {
        if(this.status === PaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен!')
        }

        this.status = PaymentStatus.Canceled;
        this.updatedAt = new Date();
    }

    proccessPayment() {
        if(this.status === PaymentStatus.Canceled) {
            throw new Error('Платеж был отменен!')
        }

        this.status = PaymentStatus.Processed;
        this.updatedAt = new Date();
    }

    toString() {
        return `Платеж: ${this.id}\nСтатус: ${this.status}\nСоздан: ${this.createdAt}\n${this.updatedAt ? 'Обновлен ' + this.updatedAt : ''}`
    }
}

const payment = new Payment(1);
console.log(payment.toString());
payment.proccessPayment();
console.log(payment.toString());
console.log('Время обработки:', payment.getPaymentLifeTime());

const payment2 = new Payment(2);
console.log(payment2.toString());
payment2.cancelPayment();
console.log(payment2.toString());
console.log('Время обработки:', payment.getPaymentLifeTime());



export {};