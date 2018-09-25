// const mongoose = require("mongoose");
// const Task = mongoose.model("Tasks");

// // get all tasks
// exports.getTasks = (req, res) => {
//     Task.find({}, (err, task) => {
//         if (err) 
//             res.send(err);
        
//             res.json(task);
//     })
// }

// // create task

// exports.createTask = (req, res) => {
//     let newTask = new Task(req.body);
//     newTask.save( (err, task) => {
//         if (err) 
//             res.send(err);
        
//         res.json(task);
//     })
// }

// // read a single task
// exports.readTask = (req, res) => {
//     Task.findById(req.params.id, (err, task) => {
//         if (err) 
//             res.send(err);
        
//         res.json(task);
//     })
// }

// // update task

// exports.updateTask = (req, res) => {
//     Task.findOneAndUpdate(req.params.id, req.body, { new: true}), (err, task) => {
//         if (err) 
//             res.send(err);
        
//         res.json(task);
//     }
// }

// // delete task

// exports.deleteTask = (req, res) => {
//     Task.remove({
//         _id: req.params.id
//     }, (err, task) => {
//         if (err) 
//             res.send(err);
        
//         res.json({ message: 'Task deleted!'});
//     })
// }