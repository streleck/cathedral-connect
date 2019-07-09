const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/', require('./controllers/viewMain'));
router.get('/login', require('./controllers/viewLogin'));
router.get('/new-user', require('./controllers/viewNewUser'));

module.exports = router;
