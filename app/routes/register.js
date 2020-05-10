const express = require('express');
const register = require('../controllers/registerController');

const router = express.Router();



//Run register controller in the function.
router.get('/', (req, res) =>
{
    res.json({
        message: "Here I'll catch the users",
    });
});


module.exports = router;