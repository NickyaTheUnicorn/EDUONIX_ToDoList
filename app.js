// Renner Yannick

// Requirements.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todos = require('./routes/todo');
const users = require('./routes/user');

// Mongoose setup
const dev_db_url = 'mongodb+srv://eduonix:eduonix@meanfullstackcours.vwemt.mongodb.net/todolistdb' // TODO: Change username and password
const mongoDb = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDb);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// App setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/todos', todos);
app.use('/users', users);

// Server setup
const port = 8081;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});