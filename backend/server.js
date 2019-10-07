const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb://admin:admin123@ds251507.mlab.com:51507/heroku_5h0dt0p1';
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoB+DB connection is successfully !!!')
})

const exercisesRouter = require('./routs/exerxisesRouter');
const usersRouter = require('./routs/usersRouter');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`)
})