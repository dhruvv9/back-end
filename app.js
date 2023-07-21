const express = require('express');
const path = require("path");
const Subscriber = require("./src/models/subscribers");
const app = express();

//to use static files we need to give permission of the public folder.
app.use(express.static("public"))

//routes
//API to render html file. || GET Method
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));

});

//API to get all data || GET Method
//returns the subscribers details
app.get("/subscribers", async (req, res) => {
  try {
    let subscribers = await Subscriber.find();
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(500);
  }
})

//api to get all subscribers by name and subscribed channel || GET Method
//returns the subscribers for the given names.
app.get("/subscribers/names", async (req, res) => {
  try {
    let subscribers = await Subscriber.find({},
      { name: 1, subscribedChannel: 1, _id: 0 }
    )
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(500);
  }
})

//api to get subscribers by id || GET Method
//returns the subscribers for the given id.
app.get("/subscribers/:id", async (req, res) => {
  try {
    let subscribers = await Subscriber.findById(req.params.id);
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

module.exports = app;