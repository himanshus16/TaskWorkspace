
import { useState } from 'react';
import React from 'react';
import swal from 'sweetalert';

const TaskForm = () => {

    const [formData, setFormData] = useState({})

    const handleInput=(e)=>{
        const { name, value } = e.target;
        setFormData((prevInput) => ({ ...prevInput, [name]: value }));
    }

    const submitTask=()=>{
        console.log(formData);
        swal({title: "Task Assigned",icon: "success"});
    }
  return (
    <>
    <div className='Form-container'>
        <div className='form'>
            <label>Task Title :</label>
            <input type='text' name='title' onChange={handleInput} value={formData.title}></input>
            <label>Task Discription :</label>
            <textarea type='text' placeholder='Task Discription' rows="5" cols="30"
            onChange={handleInput} name='discription' value={formData.discription}></textarea>
            <label for="date">Select a Date:</label>
            <input type="date" id="date" name="date" onChange={handleInput} value={formData.date}/>
            <button onClick={submitTask}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default TaskForm