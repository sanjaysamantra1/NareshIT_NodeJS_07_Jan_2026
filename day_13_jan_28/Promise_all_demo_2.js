let p1 = Promise.resolve('Response-1')
let p2 = Promise.resolve('Response-2')
let p3 = Promise.reject('Error-3')

Promise.all([p1, p2, p3]).then(
    (responseArr) => {
        console.log(responseArr)
    },
    (err) => {
        console.log('Error Occured:', err)
    }
)