/*
    Author: Akshin Goswami
    Date:   17/04/2022

    @brief:
    These are xbox live authenticator routes.
*/

const express = require('express');
const router = express.Router();
const authenticate = require('@xboxreplay/xboxlive-auth');

// handle authentication requests for xbox live accounts
router.post('/api/xbox/authenticate', (req, res) => { 
    // email and password from request
    const xboxEmail = req.email;
    const xboxPassword = req.password;

    // now authenticate
    authenticate(xboxEmail, xboxPassword)
    .then((responseFromXbox) => {
        // authentication successful so console log response
        console.log(responseFromXbox);
    })
    .catch((error)=> {
        // authentication unsuccessful so send error
        console.warn('ERROR - Authentication from Xbox Live Failed: ', error);
    })

})

module.exports = router;

