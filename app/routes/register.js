const express = require('express');
const registerController = require('../controllers/registerController');

const router = express.Router();



//Run register controller, which is a function used to register a user,
//with all the logic on registerController file,  in the function.
router.post('/', registerController.store);


module.exports = router;