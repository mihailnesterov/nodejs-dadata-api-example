const express = require('express');
const config = require('config');
const token = config.get('token');
const router = express.Router();
const fetch = require('node-fetch');

// get company data by inn
router.get('/company/:inn', (req, res) => {

    const url       = getCompanyUrl();
    const options   = getFetchOptions( req.params.inn );
    
    fetchCompanyData(url, options);

});

function getCompanyUrl() {
    return config.get('url.company.findById');
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

function fetchCompanyData(url, options) {
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log('result', json.suggestions[0].data))
        .catch(error => console.log("error", error));
}

module.exports = router;