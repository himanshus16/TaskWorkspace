import { useState } from "react";

const SignUp = () => {
    const [input , setInput] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({ ...prevInput, [name]: value }));
    }

    console.log(input); 

    return (
        <>
            <div className="Form-container">
                <div className="form">
                    <h2>New Registration</h2>
                    <label>Enter ID :</label><input type="text" name="stuid" value={input.stid } placeholder="Student ID" onChange={handleInput}/>
                    <label>Enter Name:</label><input type="text" name="name" value={input.name }  placeholder="Full Name" onChange={handleInput}/>
                    <label>Enter Email:</label><input type="email" name="email" value={input.email }  placeholder="Email" onChange={handleInput}/>
                    <label>Create Password:</label><input type="password" name="password" value={input.password }  placeholder="Create Password" onChange={handleInput}/>
                    {/* <label>Sign Up As:</label>
                    <select onChange={handleInput} value={input.registerAs || ''} name="registerAs">
                        <option value="">Select</option>
                        <option value="Student">User</option>
                        <option value="Admin">Admin</option>
                    </select> */}

                    <button>Submit</button>
                </div>
            </div>
        </>
    )
}

export default SignUp;
