const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(express.json());
app.use(express.urlencoded()); // FORM data

app.get('/', (req, res) => {
    res.send(`
        <form action='saveData' method='POST'>
            <pre>
                Enter Your Email: <input type='email' name='email' /><br/>
                Enter Your Name: <input type='text' name='name' /><br/>
                Enter Your Mobile: <input type='text' name='mobile' /><br/>
                Enter Your Password: <input type='password' name='password' /><br/>
                <input type='submit' value='Submit' />
            </pre>
        </form>
        `)
})
const allValidations = [
    check('email', 'Email should be 10 to 30 chars')
        .isEmail()
        .isLength({ min: 10, max: 30 }),
    check('name', 'name length should be minimum 5 chars')
        .isLength({ min: 5 }),
    check('mobile', 'mobile should be 10 chars')
        .isLength({ min: 10, max: 10 }),
]
app.post('/saveData', allValidations, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors)
    } else {
        res.status(200).send("No Errors found in form data, data will be inserted to DB")
    }
})

app.listen(3000, () => console.log('server running in 3000'))