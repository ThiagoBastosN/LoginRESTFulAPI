//With the model we can create a new user or search if there's
//someone with the same username.
const usersModel = require('../models/users');

module.exports = {
    async store(req, res, next)
    {

        const username = req.body.username;
        const password = req.body.password;

        //Search if the username exists in the database.
        //Remember to make it a function outside the store function.
        //(It was throwing a unhandled promise error)
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
        
        // return res.json({message: `User ${username} with password ${password} created!`});
    }
}





//This is used to delete all documents inside a collection
//in the database. (The empty object match all items of a collection).
// Model.deleteMany({}, callback);