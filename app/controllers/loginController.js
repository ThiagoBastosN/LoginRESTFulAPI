const usersModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async login(req, res, next)
    {
        const { username, password } = req.body;
        try
        {
            //It is way better to just store the result of "findOne" in a variable, and
            //then acess it's parameters.
            const user = await usersModel.findOne({name: username})
            
            if(!user) return res.status(400).send({ error: 'User does not exist' });
            //The password from the DB.
            const encryptedPassword = user.password;

            //Compare DB password with request password.
            if(!await bcrypt.compare(password, encryptedPassword))
            {
                return res.send({ ok: false });
            }
            //Token is created based on the user ID.
            const token = jwt.sign({id: user.id}, 'secretKey', {
                expiresIn: 86400,
            });

            return res.send({user, token});
        }catch
        {
            return res.status(500).send('Could not create token');
        }
    }
}