const express = require('express');
const config = require('config');
const token = config.get('token');
const router = express.Router();
const fetch = require('node-fetch');

// get court information by code
router.get('/court/:code', (req, res) => {

    const url = config.get('url.court.findById');

    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: req.params.code})
    }

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log('Court query=' + req.params.code, json.suggestions[0].data))
        .catch(error => console.log("error", error));
});

module.exports = router;