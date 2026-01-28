console.log('Global code starts here...')

try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let finalResponse = await response.json();
    console.log(finalResponse)
} catch (err) {
    console.log(err)
}

console.log('Global code ends here...')

// this code will work only in nodejs , will not work in browser