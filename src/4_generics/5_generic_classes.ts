class Resp<D, E> {
    private data: D;
    private error?: E;

    constructor(data: D, error?: E) {
        this.data = data;
        this.error = error;
    }
}

const resp = new Resp<string, string>('data')

class HTTPResp extends Resp<string, string> {
    private code: number

    constructor(data: string, error: string, code: number) {
        super(data, error);
        this.code = code;
    }
}

export {};