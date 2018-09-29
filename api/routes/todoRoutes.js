var ObjectID = require('mongodb').ObjectID;
const todo = require('../controllers/todoController.js');

module.exports = (app, db) => {
    // get all tasks
    app.get('/tasks', todo.getTasks );
    app.get('/tasks/:id', todo.getTask);
    app.post('/tasks', todo.addTask);
    app.delete('/tasks/:id', todo.deleteTask);
    app.put('/tasks/:id', todo.editTask);
}