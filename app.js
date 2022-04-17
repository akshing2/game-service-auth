/*
    Author: Akshin Goswami
    Date:   17/04/2022

    @brief:
    This node app will be used to provide api gateways to authenticate logins for 
    various gaming services.

    // TODO: deploy to cloud
*/

// app wide dependancies
require('dotenv').config(); // use process varaibles
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// configure parsers app wide
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended:  true}));
app.use(cors());

// configure routes
app.use(require('./routes/xbox-live'));


app.get('/', (res) => {
    res.send('Game Service API Endpoint for Money Mouth')
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`Game Service Authenticator running on Port: ${process.env.PORT}`)
  })