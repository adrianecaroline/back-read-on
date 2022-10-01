const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const BookRouter = require('./routes/approute');

app.use(BookRouter);

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("MongoDB is connected!")
  })
.catch( (err) => console.log(err));


app.listen(process.env.PORT, () =>{
  console.log("Online server");
});