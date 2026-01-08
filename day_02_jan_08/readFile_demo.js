const fs = require('fs');

const dataFromFile1 = fs.readFileSync('./file1.txt', 'utf-8');
console.log(dataFromFile1);