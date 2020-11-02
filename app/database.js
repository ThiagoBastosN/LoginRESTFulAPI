const mongoose = require('mongoose');

const startDatabase = function()
{
    mongoose.connect(process.env.DATABASE_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
    let db = mongoose.connection;
    
    db.once('open', () =>
    {
        console.log("Successfully connected to the database.");
    });
}

//Exporting the initialization of database. (which is a function!)
module.exports = startDatabase;
