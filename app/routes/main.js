const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth');


router.get('/', authMiddleware, (req, res) =>
{
    res.send({ ok: true, id: req.userId });
});


module.exports = router;