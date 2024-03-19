
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




const request: Request = {
    'sum': 10000,
    'from': 2,
    'to': 4
}

const successResponse: TestResponse = {
    'status': 'success',
    'data': {
        'databaseId': 567,
        'sum': 10000,
        'from': 2,
        'to': 4
    }
}

const failedResponse: TestResponse = {
    'status': 'failed',
    'data': {
        'errorMessage': 'Недостаточно средств',
        'errorCode': 4
    }
}

function showResp(resp: TestResponse) {
    if(resp.status === 'success') {
        console.log(resp.data.databaseId)
    } else {
        console.log(resp.data.errorMessage);
    }
}

export {};