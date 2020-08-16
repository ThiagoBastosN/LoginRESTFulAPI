const usersModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async login(req, res, next)
    {
        const { username, password } = req.body;

        //It is way better to just store the result of "findOne" in a variable, and
        //then acess it's parameters.
        const user = await usersModel.findOne({name: username})
        
        if(!user)
        {
            console.log('ue mano bugo');
            return res.status(400).send({ error: 'User does not exist' });
        }
        const encryptedPassword = user.password;

        try
        {
            if(!await bcrypt.compare(password, encryptedPassword))
            {
                console.log('lsenha errada irmao');
                return res.send({ ok: false });
            }

            //Token is created based on the user ID.
            const token = jwt.sign({id: user.id}, 'crebe', {
                expiresIn: 86400,
            });

            return res.send({user, token});
        }catch
        {
            return res.status(500).send('Cu');
        }
    }
}