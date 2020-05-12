const express = require('express');
const registerController = require('../controllers/registerController');

const router = express.Router();



//Run register controller in the function.
router.post('/', registerController.store);


module.exports = router;