let startDatabase = function()
{
    const mongoose = require('mongoose');
    
    mongoose.connect('mongodb+srv://cleber:mesadesktop1@cluster0-keiga.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
    let db = mongoose.connection;
    
    db.once('open', () =>
    {
        console.log("CONNECTED TO THE DATABASE BRO");
    });

}

//Exporting the initialization of database.
module.exports = startDatabase;
