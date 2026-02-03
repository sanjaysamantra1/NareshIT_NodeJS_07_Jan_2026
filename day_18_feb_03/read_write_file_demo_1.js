// Read the data from 2 files(file1,file2), write the data to file3.txt
const fs = require('fs');

// non-blocking code 
fs.readFile('../data/file_1.txt', 'utf8', (err, dataFromFile1) => {
    fs.readFile('../data/file_2.txt', 'utf8', (err, dataFromFile2) => {
        fs.writeFile('../data/file_3.txt', `${dataFromFile1}\n${dataFromFile2}`, (err, data) => {
            console.log('Data Written Succesfully!!!')
        })
    })
})


// Blocking code 
let dataFromFile1 = fs.readFileSyns('../data/file_1.txt', 'utf8');
let dataFromFile2 = fs.readFileSyns('../data/file_2.txt', 'utf8');
fs.writeFileSync('../data/file_3.txt', `${dataFromFile1}\n${dataFromFile2}`);

console.log('Some code ....')