const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);

const registerRoute = require('./routes/register');


app.use('/register', registerRoute);





server.listen(process.env.PORT || 3000);
