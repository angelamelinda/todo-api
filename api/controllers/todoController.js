var ObjectID = require('mongodb').ObjectID;

// // get all tasks
exports.getTasks = (req, res) => {
  db.collection('todo').find().toArray(function (err, item) {
    if (err) {
      res.send({ 'error': 'An error has occurred' });
    } else {
      res.send(item);
    }
  });
};

exports.getTask = (req, res) => {
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  db.collection('todo').findOne(details, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occurred' });
    } else {
      res.send(item);
    }
  });
}

exports.addTask = (req, res) => {
  const task = {
    name: req.body.name, status: req.body.status, created_date: req.body.created_date
  };
  db.collection('todo').insertOne(task, (err, result) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.send(result.ops[0])
    }
  })
}

exports.deleteTask = (req, res) => {
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  db.collection('todo').deleteOne(details, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occurred' });
    } else {
      res.send(req.params);
    }
  });
}
exports.editTask = (req, res) => {
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  const task = {
    name: req.body.name, status: req.body.status, created_date: req.body.created_date
  };
  db.collection('todo').updateOne(details, { $set: task }, (err, result) => {
    if (err) {
      res.send({ 'error': 'An error has occurred' });
    } else {
      res.send(task);
    }
  });
}