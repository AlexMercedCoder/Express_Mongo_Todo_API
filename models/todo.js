// importing the already connected mongoose object from the connection file
const {Schema, model} = require("../db/connection")

////////////////////////
//Created The Schema
////////////////////////

const TodoSchema = new Schema({
    reminder: String,
    completed: Boolean
})

////////////////////////
//Created the Model
////////////////////////
    
const Todo = model("Todo", TodoSchema)

////////////////////////
// Exported the model
////////////////////////

module.exports = Todo