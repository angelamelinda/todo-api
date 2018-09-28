var ObjectID = require('mongodb').ObjectID;
module.exports = (app, db) => {
    // get all tasks
    app.get('/tasks', (req, res) => {
        db.collection('todo').find().toArray(function (err, item) {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
    });

    app.get('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('todo').findOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
    });

    app.post('/tasks', (req, res) => {
        const task = {
          name: req.body.name, status: req.body.status, created_date: req.body.created_date
        };
        db.collection('todo').insertOne(task, (err, result) => {
            if (err) {
                res.send({ 'error' : 'An error has occured' });
            } else {
                res.send(result.ops[0])
            }
        })
    })

    app.delete('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('todo').deleteOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Task ' + id + ' deleted!');
          } 
        });
      });

      app.put('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const task = {
            name: req.body.name, status: req.body.status, created_date: req.body.created_date
        };
        db.collection('todo').updateOne(details, {$set: task}, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(task);
          } 
        });
      });
}