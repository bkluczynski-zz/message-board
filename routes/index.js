/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const db = require('../db/queries');

/* GET home page. */
router.get('/api/messages', db.getMessages);
router.post('/api/messages', db.createMessage);
router.put('/api/messages/:id', db.vote);

module.exports = router;
