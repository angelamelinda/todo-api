const todo = require('../controllers/todoController.js');

module.exports = (app, db) => {
    app.get('/tasks', todo.getTasks );
    app.get('/tasks/:id', todo.getTask);
    app.post('/tasks', todo.addTask);
    app.delete('/tasks/:id', todo.deleteTask);
    app.put('/tasks/:id', todo.editTask);
}