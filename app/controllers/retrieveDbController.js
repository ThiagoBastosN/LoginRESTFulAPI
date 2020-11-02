const userModel = require('../models/users');

const retrieveDb = async function (req, res, next)
    {
        try
        {
            const dbData = await userModel.find({});
            
            if(!dbData) return res.status(500).send("Could not retrieve DB info.");

            return res.send({dbData});
        }catch
        {
            return res.status(500).send("Could not retrieve DB info.");
        }
    }

//For testing purposes you can retrieve all your DB.
module.exports = {
    retrieveDb
}
