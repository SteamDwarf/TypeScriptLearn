abstract class Logger {
    abstract log(message: unknown): void;
    printDate(date: Date) {
        this.log(date)
    }
}

class LoggerWithDate extends Logger{
    log(message: unknown): void {
        console.log(message)
    }

    logWithDate(message: unknown) {
        this.printDate(new Date());
        this.log(message)
    }

}

const logger = new LoggerWithDate();
logger.logWithDate('Hello');

export {};