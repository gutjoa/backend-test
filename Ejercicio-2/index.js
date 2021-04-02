const express = require("express");
const bodyParser = require("body-parser");

const apiRouter = require('./routes/api');
require('./db');

const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter);


app.listen(3000, () => {
    console.log("server start");
})