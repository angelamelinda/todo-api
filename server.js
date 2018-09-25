const express   = require('express');
const app       = express();
const port      = process.env.PORT || 8000;
// const mongoose  = require('mongoose');
const MongoCliet= require('mongodb').MongoClient;
// const Task       = require('./api/models/todoModel');
// const db         = require('./api/config/db')
const bodyParser    = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.append('Access-Control-Allow-Methods', 'DELETE, PUT')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://todo:todo12345@ds211143.mlab.com:11143/todo") //connect to MongoDb

// handle incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware to handle wrong routes
// app.use( (req, res) => {
//     res.status(404).send({ url: req.originalUrl + ' not found'});
// })

// let routes = require('./api/routes/todoRoutes');
// routes(app);

// get out server running
MongoCliet.connect("mongodb://todo:todo12345@ds211143.mlab.com:11143/todo", (err, database) => {
    if (err) 
        return console.log(err)

    db = database.db('todo');
    require('./api/routes/todoRoutes')(app, db);

    app.listen(port, () => {
        console.log('App running on ' + port);
    })
})