const mongoose = require('mongoose')
const subscriberModel = require('./src/models/subscribers')
const data = require('./src/data')
const dotenv = require("dotenv");

// configuration of env
dotenv.config();

// Connect to DATABASE
const mongoURI ='mongodb+srv://dhruva:238107@cluster0.hhhmhyx.mongodb.net/?retryWrites=true&w=majority'
const DATABASE_URL =  process.env.MONGOURI;
mongoose.connect('mongodb+srv://dhruva:238107@cluster0.hhhmhyx.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll();