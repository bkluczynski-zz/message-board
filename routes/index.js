const express = require('express');
const router = express.Router();
const db = require('../queries');

/* GET home page. */
router.get('/api/messages', db.getMessages);

module.exports = router;
