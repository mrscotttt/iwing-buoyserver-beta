const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const product = require("./api/product");
const Sensor = require('./src/model/sensormodel');
const mongoose = require("mongoose");

app.use(express.json());
app.use(bodyParser.json())

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  
const dbUrl = "mongodb+srv://root:root@cluster0.lol3x.mongodb.net/test1?retryWrites=true&w=majority"

mongoose.connect(dbUrl, options, (err) => {
    if (err) console.log(err);
});

app.use("/api/product", product);

app.get('/s', async (req, res) => {
    const s = await Sensor.find({})
    res.json(s)
})

app.post('/s', async (req, res) => {
    const payload = req.body
    const s = new Sensor(payload)
    await s.save()
    res.status(201).end()
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
