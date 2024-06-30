const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://admin:AnandVEDANT@cluster0.njoc0zd.mongodb.net/todos")

const todoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean
});

// Create a model based on the schema
const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}