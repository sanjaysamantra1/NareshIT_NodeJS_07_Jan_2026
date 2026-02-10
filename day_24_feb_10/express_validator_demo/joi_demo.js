const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());
app.use(express.urlencoded()); // FORM data

app.get('/', (req, res) => {
    res.send(`
        <form action='saveData' method='POST'>
            <pre>
                Enter Your Email: <input type='email' name='email' /><br/>
                Enter Your Name: <input type='text' name='name' /><br/>
                Enter Your Age: <input type='number' name='age' /><br/>
                Enter Your Mobile: <input type='text' name='mobile' /><br/>
                Enter Your Password: <input type='password' name='password' /><br/>
                <input type='submit' value='Submit' />
            </pre>
        </form>
        `)
})

const schema = Joi.object({
    name: Joi.string()
        .min(5)
        .max(30)
        .required(),
    age: Joi.number()
        .min(1)
        .max(100)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    mobile: Joi.string()
        .min(10)
        .max(10)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

})



app.post('/saveData', async(req, res) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
        res.status(400).json(error)
    } else {
        res.status(200).send("No Errors found in form data, data will be inserted to DB")
    }
})

app.listen(3000, () => console.log('server running in 3000'))