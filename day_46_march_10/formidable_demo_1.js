const express = require('express');
const { formidable } = require('formidable');
const fs = require('fs');
const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="myFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

app.post('/upload', async (req, res) => {
    let options = {
        maxFileSize: 1024 * 200, // max 200 kb
        filter: function ({ mimetype }) {
            return mimetype && mimetype.includes('image') // only images 
        }
    }
    const formidableObj = formidable(options);
    try {
        let [fields, files] = await formidableObj.parse(req);
        for (fileObj of files.myFiles) {
            let oldPath = fileObj.filepath;
            let newPath = `${__dirname}/assets/${fileObj.originalFilename}`;
            let imageFile = fs.readFileSync(oldPath);
            fs.writeFileSync(newPath, imageFile);
            console.log(fileObj.filepath, fileObj.originalFileName)
        }
        res.send('All Files Uploaded Successfully!!!')
    } catch (err) {
        res.send('Please upload Only Image file, Also make sure file size is not exceeding 200 kb')
    }
})

app.listen(5000, async () => {
    console.log('app running at 5000')
});

