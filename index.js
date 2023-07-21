const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const dotenv = require("dotenv")

//configuring env
dotenv.config();

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connecting to DATABASE 
const DATABASE_URL = process.env.MONGOURI;
const mongoURI='mongodb+srv://dhruva:238107@cluster0.hhhmhyx.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://dhruva:238107@cluster0.hhhmhyx.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// To start the Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));