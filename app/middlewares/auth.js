const jwt = require('jsonwebtoken');

module.exports = function authenticateToken(req, res, next)
{
    //Store authorization header.
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).send({ error: 'No authorization header provided' })

    const splittedHeader = authHeader.split(' ');

    if(splittedHeader.length !== 2) return res.status(401).send({ error: 'Wrong token format' });

    const [scheme, token] = splittedHeader;

    if(!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Wrong scheme' });

    jwt.verify(token, 'secretKey', (err, decoded) =>
    {
        if(err) return res.status(401).send({ error: 'Wrong token' });

        req.userId = decoded.id;
        return next();
    });
}