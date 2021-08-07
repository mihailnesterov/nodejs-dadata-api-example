const express = require('express');
const router = express.Router();
const utils = require('../lib/utils');

// get court data by code
router.get('/court/:code', (req, res) => {

    const url       = utils.getUrlByName( 'court' );
    const options   = utils.getOptions( req.params.code );
    
    utils.fetchData(url, options);

});

module.exports = router;