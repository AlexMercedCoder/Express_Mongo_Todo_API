require("dotenv").config()
const mongoose = require("mongoose")
const {log} = require("mercedlogger")

/////////////////////////////////////
// VARIABLES
/////////////////////////////////////

const DATABASE_URL = process.env.DATABASE_URL
const config = {useUnifiedTopology: true, useNewUrlParser: true}

/////////////////////////////////////
// Connect to the Database
/////////////////////////////////////

mongoose.connect(DATABASE_URL, config)

///////////////////////////////////////
// Event Messaging
///////////////////////////////////////
mongoose.connection
.on("open", () => log.green("DB Status:", "👍 CONNECTED TO MONGO 👍"))
.on("close", () => log.magenta("DB Status:", "👍 DISCONNECTED TO MONGO 👍"))
.on("error", () => log.red("DB Status:", "👍 DISCONNECTED TO MONGO 👍"))

module.exports = mongoose