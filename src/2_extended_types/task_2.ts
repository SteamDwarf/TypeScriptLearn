interface Request {
    sum:  number
    from: number
    to: number
}

interface FailedData {
    errorMessage: string
    errorCode: number
}

interface SuccessData extends Request {
    databaseId: number
}

interface SuccessResponse {
    status: 'success',
    data: SuccessData
}

interface FailedResponse {
    status: 'failed',
    data: FailedData
}

type TestResponse = SuccessResponse | FailedResponse

function isSuccess(x: TestResponse): x is SuccessResponse {
    return x.status === 'success';
}

function checkResponse(resp: TestResponse): number {
    if(isSuccess(resp)) {
        return resp.data.databaseId;
    }

    throw new Error('Ошибка запроса')
}

export {};