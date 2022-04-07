const express = require('express');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const validateReq = require('./validate');
const app = express();
const port = 5000;

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post('/signup', jsonParser, (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const subscribe = req.body.subscribe;
    const validateRes = validateReq(firstName, lastName, email, password);
    if(validateRes) {
        if(subscribe) {
            res.status(200).json(`Hello ${firstName} ${lastName}, Thank you for signing up. Your account is now created`)
        } else {
            res.status(200).json(`Hello ${firstName} ${lastName}, Thank you for signing up.`)
        }
    } else {
        res.status(401);
    }

})
app.listen(port, () => {
    console.log('server is running on ', port);
})