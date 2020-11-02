const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv').config();

//Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const mainRoute = require('./routes/main');
const dbOperations = require('./routes/dbOperations');

const database = require('./database');

startServer(database);

function startServer(databaseConfig = {})
{
    //Initializing database connection.
    const db = databaseConfig.database || databaseConfig();

    const app = express();
    const server = http.createServer(app);
    
    //Enable middlewares to parse JSON body and to prevent CORS errors
    app.use(cors());
    app.use(express.json());
    
    //Add routes. 
    app.use('/register', registerRoute);
    app.use('/login', loginRoute)
    app.use('/main', mainRoute);
    app.use('/dbOperations', dbOperations)
    
    
    server.listen(process.env.PORT || 3000);
}

