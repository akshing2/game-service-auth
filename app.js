/*
    Author: Akshin Goswami
    Date:   17/04/2022

    @brief:
    This node app will be used to provide api gateways to authenticate logins for 
    various gaming services. This app will be deployed to a cloud endpoint.
*/

const express = require('express');
const app = express();
require('dotenv').config(); // use process varaibles
const port = 3000;

app.get('/', (req, res) => {
    res.send('Game Service API Endpoint for Money Mouth')
  })
  
  app.listen(port, () => {
    console.log(`Game Service Authenticator running on Port: ${process.env.PORT}`)
  })