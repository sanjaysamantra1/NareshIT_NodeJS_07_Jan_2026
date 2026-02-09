const fs = require('fs');

const readStream = fs.createReadStream('../data/file_1.txt', 'utf8');
const writeStream = fs.createWriteStream('../data/file_2.txt');

readStream.on('data', (chunk) => {
    console.log(`Received Chunk:`);
    writeStream.write(chunk)
})

writeStream.on('finish',()=>{
    console.log('data written succesfully')
})
writeStream.on('error',(err)=>{
    console.log('error',err)
})