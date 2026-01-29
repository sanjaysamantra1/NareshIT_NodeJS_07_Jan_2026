const fs = require('fs');

console.log('Global Code Starts Here...')

fs.readFile('../data/file_1.txt', 'utf8', (err, data) => { // non-blocking
    console.log(data)
}); // time consuming, will allow other code to execute


console.log('Global Code Ends Here...')