const express = require('express');
const router = express.Router();

const retrieveDbController = require('../controllers/retrieveDbController');


router.get('/', retrieveDbController.retrieveDb);

module.exports = router;