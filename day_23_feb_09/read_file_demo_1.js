const fs = require('fs');

fs.readFile('../data/file_1.txt', (err, data) => {
    console.log(data);
    console.log(data.toString())
});