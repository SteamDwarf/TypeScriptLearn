function splitBy2<T>(array: Array<T>): Array<Array<T>> {
    const middle = array.length / 2
    return [array.slice(0, middle), array.slice(middle)];
}


const splitter: <T>(array: Array<T>) => Array<Array<T>> = splitBy2;

interface ILogLine<T> {
    timeStamp: Date;
    data: T
}

type LogLineType<T> = {
    timeStamp: Date;
    data: T
}

const logLine: ILogLine<number> = {
    timeStamp: new Date(),
    data: 1
}

const logLine2: ILogLine<{name: string}> = {
    timeStamp: new Date(),
    data: {
        name: 'Vasya'
    }
}

const logLine3: LogLineType<number> = {
    timeStamp: new Date(),
    data: 1
}

const logLine4: LogLineType<{name: string}> = {
    timeStamp: new Date(),
    data: {
        name: 'Vasya'
    }
}

export {};