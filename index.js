const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const ejs = require('ejs');
const cors = require('cors');
app.set('view engine', 'ejs');
const userRoute = require('./routes/user.route')
const port = process.env.PORT;
const MONGO_URI = process.env.MONGODB_URI;
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('connected to MONGODB');
    })

    .catch((err) => {
        console.log('Error connecting to MONGODB', err);
    });


app.use('/user', userRoute);

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})