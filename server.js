require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const {log} = require("mercedlogger")
const TodoRouter = require("./controllers/todo")

///////////////////////////////////
// VARIABLES
//////////////////////////////////
const PORT = process.env.PORT || 3000

////////////////////////////
// CREATE APPLICATION OBJECT
////////////////////////////
const app = express()

/////////////////////////////
// Middleware
/////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

////////////////////////////
// Routes & Routers
/////////////////////////////
app.get("/", (req, res) => res.send("Hello World"))
app.use("/todos", TodoRouter)

/////////////////////////////
// Get Server Listening
/////////////////////////////
app.listen(PORT, () => log.green("server status",`😍 Sever is Listening on port ${PORT} 😍`))