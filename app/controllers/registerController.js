//With the model we can create a new user or search if there's
//someone with the same username.
const usersModel = require('../models/users');

module.exports = {
    async store(req, res, next)
    {
        const username = req.body.username;
        const password = req.body.password;
        try
        {
            //Search if the username exists in the database.
            const userExists = await usersModel.findOne({name: username})

            //Check if username already exists in database, if not,
            //proceed.
            if(userExists) return res.json({message: `${username} already exists.`});
    
            //Create new user in the database since the username doesn't exist.
            const userCreated = await usersModel.create({
                name: username,
                password: password
            })
            return res.send({userCreated});
        }catch
        {
            return res.status(500).send('Could not register');
        }

    }
}





//This is used to delete all documents inside a collection
//in the database. (The empty object match all items of a collection).
// Model.deleteMany({}, callback);