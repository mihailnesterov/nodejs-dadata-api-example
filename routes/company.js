const express = require('express');
const router = express.Router();
const utils = require('../lib/utils');

// get company data by inn
router.get('/company/:inn', (req, res) => {

    const { getUrlByName, getOptions, fetchData } = utils;

    const url       = getUrlByName( 'company' );
    const options   = getOptions( req.params.inn );
    
    fetchData( url, options );

});

module.exports = router;