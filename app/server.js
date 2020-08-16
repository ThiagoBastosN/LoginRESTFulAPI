const express = require('express');
const http = require('http');
const cors = require('cors');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const mainRoute = require('./routes/main');

const database = require('./database');

startServer(database);

//First depency injection!
function startServer(databaseConfig = {})
{
    const db = databaseConfig.database || databaseConfig();
    const app = express();
    const server = http.createServer(app);
    
    
    //Initializing database connection.
    
    //Enable middlewares to parse body jsons and to prevent CORS errors
    app.use(cors());
    app.use(express.json());
    
    
    app.use('/register', registerRoute);
    app.use('/login', loginRoute)
    app.use('/main', mainRoute);
    
    
    
    
    
    server.listen(process.env.PORT || 3000);
}

