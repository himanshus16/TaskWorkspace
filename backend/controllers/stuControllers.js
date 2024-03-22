const StuModel = require("../models/studModel");

const Stusave = (req, res) => {
    // Create a new instance of StuModel using the data from the request body
    const myData = new StuModel(req.body);

    myData.save()
        .then(savedData => {
            // Send a success response with the saved data
            res.status(201).json(savedData);
        })
        .catch(err => {
            // Send an error response if there are any issues
            res.status(400).json({ error: err.message });
        });
};

const getStudents = (req, res) => {
    StuModel.find() // Retrieve all documents from the "Student" collection
        .then(students => {
            res.status(200).json(students);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};

const deleteStudent = (req, res) => {
    const studentId = req.params.id;

    StuModel.findByIdAndDelete(studentId)
        .then(deletedStudent => {
            if (!deletedStudent) {
                return res.status(404).json({ error: "Student not found" });
            }
            res.status(200).json({ message: "Student deleted successfully", deletedStudent });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};

// Function to update a student by ID
const updateStudent = (req, res) => {
    const studentId = req.params.id;

    StuModel.findByIdAndUpdate(studentId, req.body, { new: true })
        .then(updatedStudent => {
            if (!updatedStudent) {
                return res.status(404).json({ error: "Student not found" });
            }
            res.status(200).json({ message: "Student updated successfully", updatedStudent });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};


module.exports = {
    Stusave,
    getStudents,
    updateStudent,
    deleteStudent
};
