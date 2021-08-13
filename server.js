const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = 3000;
const routes = require('./routes/routesManager')

const mongoDBConnect = 'mongodb+srv://admin:O1WDALbxNqknCk46@cluster0.emj66.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoDBConnect, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use('/api', routes)

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root))

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});