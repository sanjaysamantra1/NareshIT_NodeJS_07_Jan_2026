// Read the data from 2 files(file1,file2), write the data to file3.txt
const fs = require('fs');

fs.readFile('../data/file_1.txt', 'utf8', (err, dataFromFile1) => {
    fs.readFile('../data/file_2.txt', 'utf8', (err, dataFromFile2) => {
        fs.writeFile('../data/file_3.txt', `${dataFromFile1} \n ${dataFromFile2}`, (err, data) => {
            console.log('Data Written in file-3 successfully')
        })
    })
})
// writting callback function inside another callback