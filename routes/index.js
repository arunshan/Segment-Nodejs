var express = require('express');
var router = express.Router();

var api = require('../api')
/* GET home page. */
router.post('/identify', (req, res, next) => api.identify(req, res, next))

module.exports = router;
