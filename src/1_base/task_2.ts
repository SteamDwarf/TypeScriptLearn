// Запрос
/* {
    "topicId": 5,
    "status": "published" // "draft", "deleted"
} */

enum StatusCode {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}

type RequestT = {
    topicId: number,
    status: StatusCode
}


// Ответ
/* [
    {
        "question": "Как осуществляется доставка?",
        "answer": "быстро!",
        "tags": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": "published"
    }
] */

type ResponseT = {
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: StatusCode
}


async function getFaqs(req: RequestT): Promise<ResponseT[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
