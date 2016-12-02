var express = require('express');
var router = express.Router();

var api = require('../api')
/* GET home page. */
router.get('/', (req, res, next) => api.home(req, res, next))
router.post('/api/raw', (req, res, next) => api.raw(req, res, next))
router.post('/api/identify', (req, res, next) => api.identify(req, res, next))
router.post('/api/track', (req, res, next) => api.track(req, res, next))
router.post('/api/group', (req, res, next) => api.group(req, res, next))
router.post('/api/page', (req, res, next) => api.page(req, res, next))
router.post('/api/screen', (req, res, next) => api.screen(req, res, next))
router.post('/api/alias', (req, res, next) => api.alias(req, res, next))

module.exports = router;
