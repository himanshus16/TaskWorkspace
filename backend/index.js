const express = require("express");
const app = express();
const stucontrollers = require("./controllers/stuControllers");
const bodyParser = require("body-parser"); // Changed to bodyParser

// Parse URL-encoded bodies for form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Parse JSON bodies

const mongoose = require("mongoose");
const PORT = process.env.PORT || 7000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/TaskManager")
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log("Error in connection " + err));

// Handle POST requests to /insert route using Stusave controller function
app.post("/insert", stucontrollers.Stusave);
app.get("/display", stucontrollers.getStudents);
app.delete("/students/:id", stucontrollers.deleteStudent);
app.put("/students/:id", stucontrollers.updateStudent);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
