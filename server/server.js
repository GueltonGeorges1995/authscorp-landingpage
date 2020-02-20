const path = require('path');

const express = require('express');

const { check, validationResult } = require('express-validator');

const Mailchimp = require('mailchimp-api-v3');

const app = express();

app.use(express.urlencoded());

app.use(express.json()); 


app.post('/subscribe',[

    check('email').isEmail()

],(req, res)=>{

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(422).json({ errors: errors.array() });

    }
    
    const {email} = req.body;

    const api_key='9aeaad9569701811c9a717ffce778b5d-us4';

    const list_id='198da7c91b';

    const mailchimp = new Mailchimp(api_key);

    mailchimp.post(`lists/${list_id}`,{ members: [{ 
            email_address:email,
            status: "subscribed"
        }]
    }).then(()=>{
        return res.redirect('http://localhost:8080/');
    })   
    
})

app.listen(3000);