let res1 = Math.max(10, 20, 30, 40, 50); // max() returns a value 
console.log(res1);

let userPromise = fetch('https://jsonplaceholder.typicode.com/users');
console.log(userPromise);
userPromise.then(
    (response) => {
        response.json().then(finalResponse => {
            console.log(finalResponse)
        })
    },
    (err) => {
        console.log(err)
    }
)