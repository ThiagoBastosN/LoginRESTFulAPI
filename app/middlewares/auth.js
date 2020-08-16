const { schema } = require("../models/users");

const jwt = require('jsonwebtoken');

module.exports = function authenticateToken(req, res, next)
{
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).send({ error: 'No authorization header' })

    const splittedHeader = authHeader.split(' ');

    if(splittedHeader.length !== 2) return res.status(401).send({ error: 'Wrong token format' });

    const [scheme, token] = splittedHeader;

    if(!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Wrong scheme' });

    jwt.verify(token, 'crebe', (err, decoded) =>
    {
        if(err) return res.status(401).send({ error: 'Wrong token' });

        console.log("Oia o decodificado" + decoded);
        req.userId = decoded.id;
        return next();
    });
}