let userPromise = fetch('https://jsonplaceholder.typicode.com/users');          // 2
let commentsPromise = fetch('https://jsonplaceholder.typicode.com/comments');   // 3
let todosPromise = fetch('https://jsonplaceholder.typicode.com/todos');         // 2

Promise.all([userPromise, commentsPromise, todosPromise]).then(
    ([userResponse, commentResponse, todosResponse]) => {
        Promise.all([userResponse.json(), commentResponse.json(), todosResponse.json()]).then(
            ([userResponseFinal, commentResponseFinal, todosResponseFinal]) => {
                console.log(userResponseFinal, commentResponseFinal, todosResponseFinal)
            }
        )
    }
)