
interface ILogger {
    log(...args: unknown[]): void;
    error(...args: unknown[]): void;
}
// Имплементация интерфейса позволяет нам создавать много разных классов, у которых будут необходимые методы
class Logger implements ILogger {
    log(...args: unknown[]): void {
        console.log(args);
    }
    error(...args: unknown[]): void {
        console.error(args);
    }
    
}

const logger: ILogger = new Logger();
logger.error('Error');

interface IPayable {
    pay(paymentId: number): void;
}

interface IDeletable {
    delete(): void;
}

class User implements IDeletable, IPayable {
    delete(): void {
        console.log('Пользователь удален')
    }
    pay(paymentId: number): void {
        console.log(`Оплата счетп ${paymentId} прошла успешно`)
    }

}

export {};