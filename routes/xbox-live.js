/*
    Author: Akshin Goswami
    Date:   17/04/2022

    @brief:
    These are xbox live authenticator routes.
*/

const express = require('express');
const router = express.Router();
const xboxLiveAuth = require('@xboxreplay/xboxlive-auth');

const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.json({limit: '10mb', extended: true}));
router.use(bodyParser.urlencoded({limit: '10mb', extended:  true}));
router.use(cors());

// handle authentication requests for xbox live accounts
router.post('/api/xbox/authenticate', (req, res) => { 
    console.log('Request Body: ', req);

    // email and password from request
    const xboxEmail = req.body.email;
    const xboxPassword = req.body.password;

    // TODO: Create a validation method for incoming requests 

    console.log('Attempting xbox live authentication with following credentials...');
    console.log('email: ', xboxEmail);
    console.log('password: ', xboxPassword);

    // now authenticate
    xboxLiveAuth.authenticate(xboxEmail, xboxPassword)
    .then((responseFromXbox) => {
        // authentication successful so console log response
        console.log(responseFromXbox);
        res.status(200).send(responseFromXbox);
    })
    .catch((error)=> {
        // authentication unsuccessful so send error
        console.warn('ERROR - Authentication from Xbox Live Failed: ', error);
        res.status(400).send(error);
    })

})

module.exports = router;

