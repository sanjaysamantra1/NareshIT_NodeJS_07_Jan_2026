const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
// middlewares
app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No Files were uploaded.')
    }
    let sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/assets/' + sampleFile.name;

    sampleFile.mv(uploadPath, function (err) {
        if (err)
            res.status(500).send(err)
        res.status(200).send(`${sampleFile.name} uploaded successfully!!!`)
    })
})

app.listen(5000, async () => {
    console.log('app running at 5000')
});

