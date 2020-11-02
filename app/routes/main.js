const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth');


router.get('/', authMiddleware, (req, res) =>
{
    res.send({ ok: "Retrieve data since it's been authenticated", id: req.userId });
});


module.exports = router;