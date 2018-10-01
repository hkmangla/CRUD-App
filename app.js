const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const path = require('path');
const config = require('./config/database');
const crudData = require('./controllers/crud');

mongoose.connect(config.database, {useMongoClient: true}).then(
    () => console.log("Mongo server is ready to use!"),
    (err) => console.log(err)
);


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
   res.send("App is working");
});

app.use('/cruddata', crudData);

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.listen(port,
    () => console.log("Server started successfully on port " + port)
);
