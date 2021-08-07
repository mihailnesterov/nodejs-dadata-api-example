const config = require('config');
const fetch = require('node-fetch');

function getUrlByName( name ) {
    return config.get(`url.${name}.findById`);
}

function getOptions( param ) {
    return {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + config.get('token')
        },
        body: JSON.stringify({query: param})
    };
    
}

function fetchData(url, options) {
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log('result', json.suggestions[0].data))
        .catch(error => console.log("error", error));
}

module.exports.getUrlByName = getUrlByName;
module.exports.getOptions = getOptions;
module.exports.fetchData = fetchData;