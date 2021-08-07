const express = require('express');
const router = express.Router();
const utils = require('../lib/utils');

// get company data by inn
router.get('/company/:inn', (req, res) => {

    const url       = utils.getUrlByName( 'company' );
    const options   = utils.getOptions( req.params.inn );
    
    utils.fetchData(url, options);

});

module.exports = router;