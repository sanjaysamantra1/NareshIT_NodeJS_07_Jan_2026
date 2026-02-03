const fs = require('fs');
const { dirname } = require('path');

const dirName = 'temp';
const fileName = `${dirName}/demo.txt`;
const newFileName = `${dirName}/demo_2.txt`;

// create a directory if it's not present
if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
    console.log('Directory Created')
}

// create and write content to a file
fs.writeFileSync(fileName, 'Helllo NodeJS!!!')
console.log('data written')

// write more content (append)
fs.appendFileSync(fileName, 'Hiiii NodeJS!!!')
console.log('data appended')

// rename the file
fs.renameSync(fileName, newFileName);
console.log('file re-named')

// check if file is present?
console.log(fs.existsSync(fileName))
console.log(fs.existsSync(newFileName))

// statistics of a file
let statObj = fs.statSync(newFileName);
console.log(statObj.size, statObj.ctime, statObj.mtime)

// delete file
fs.unlinkSync(newFileName)
console.log('file deleted')

// delete the directory
fs.rmdirSync(dirName)
console.log('folder deleted')