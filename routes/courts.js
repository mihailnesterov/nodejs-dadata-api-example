const express = require('express');
const router = express.Router();
const utils = require('../lib/utils');

// get court data by code
router.get('/court/:code', (req, res) => {

    const { getUrlByName, getOptions, fetchData } = utils;

    const url       = getUrlByName( 'court' );
    const options   = getOptions( req.params.code );
    
    fetchData( url, options );

});

module.exports = router;