const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 
const sendGrid = require('@sendGrid/mail');
  
sendGrid.setApiKey(process.env.API_KEY); 
const app = express();  
console.log(process.env);

app.use(bodyParser.json());

app.use(cors()); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});


app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    const msg = {
        to: 'shaansajjadhossain@gmail.com',
        from: 'shaansajjadhossain@gmail.com',
        subject: 'Website Contact',
        text: req.body.email + req.body.message 
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});

