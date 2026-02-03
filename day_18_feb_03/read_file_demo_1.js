const fs = require('fs');

fs.readFile('../data/file_1.txt', 'utf-8', (err, data) => {
    console.log(data);
});