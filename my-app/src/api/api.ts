
const getPost = (): Promise<any> => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return fetch(url);
}

const newPost = (postData: any): Promise<any> => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}

export { getPost, newPost };
