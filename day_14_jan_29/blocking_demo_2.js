const fs = require('fs');

console.log('Global Code Starts Here...')

const file1Data = fs.readFileSync('../data/file_1.txt', 'utf8'); // time consuming
console.log(file1Data)

console.log('Global Code Ends Here...')