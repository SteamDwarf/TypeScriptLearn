function fetchWithAuth(url: string, method: 'POST' | 'GET') {}

let method = 'POST';
//fetchWithAuth('google.com', method) //Ошибка

//Каст типов, лучше использовать когда точно уверены что значение не поменяется
fetchWithAuth('google.com', method as 'POST')