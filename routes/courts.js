const express = require('express');
const config = require('config');
const token = config.get('token');
const router = express.Router();
const fetch = require('node-fetch');

// get court data by code
router.get('/court/:code', (req, res) => {

    const url       = getCourtUrl();
    const options   = getFetchOptions( req.params.code );
    
    fetchCourtData(url, options);

});


function getCourtUrl() {
    return config.get('url.court.findById');
}

function getFetchOptions( param ) {
    return {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: param})
    };
    
}

function fetchCourtData(url, options) {
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log('result', json.suggestions[0].data))
        .catch(error => console.log("error", error));
}

module.exports = router;