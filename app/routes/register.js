const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');

router.post('/', registerController.store);


module.exports = router;