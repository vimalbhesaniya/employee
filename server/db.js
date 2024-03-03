const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://vimalbhesaniya007:odDqGFaeFajJKsrK@cluster0.aati5w7.mongodb.net/?retryWrites=true&w=majority", {dbName:"jobDuniya"}).then(console.log("database connected successfully"))
// mongoose.connect("mongodb://127.0.0.1:27017/admin").then(console.log("database connected successfully"))