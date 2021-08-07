const express = require('express');
const config = require('config');
const token = config.get('token');
const router = express.Router();
const fetch = require('node-fetch');

// get company information by inn
router.get('/company/:inn', (req, res) => {

    const url = config.get('url.company.findById');

    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: req.params.inn})
    }

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log('INN=' + req.params.inn, json.suggestions[0].data))
        .catch(error => console.log("error", error));
});

module.exports = router;