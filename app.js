const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
app.use(
    express.urlencoded({ extended: true })
);
const postsRoute = require('./routes/posts');

app.use('/books', postsRoute);

// connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true},() =>{
    console.log('connected to MongoDB!');
});

app.listen(process.env.PORT || 3000)