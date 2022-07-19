import React, { useState } from "react";
export default function AddUser(){
    const [state, setState]=useState({
        FirstName:"",
        LastName : "",
        email:" ",
        password: " ",
        gender:"",
        UserType:"",

    });
    const handelInputChange = (event) =>{
        setState((prevprops) => ({
            ...prevprops,
            [event.target.name] :event.target.value
        }));
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(state);

    };
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>FirstName:</label>
                <input type="text" name="firstName" value={state.FirstName} 
                onChange={handelInputChange} />
                <label>LastName:</label>
                <input type="text" name="lastName" value={state.LastName} 
                onChange={handelInputChange} />
                <label>Email:</label>
                <input type="text" name="Email" value={state.email} 
                onChange={handelInputChange} />
                <label>Password:</label>
                <input type="password" name="password" value={state.password} 
                onChange={handelInputChange} />
                <label>Gender</label>
                <input type="radio" name="gender" value="Male"></input>
                   <label for="Male">Male</label>
                   <input type="radio" name="gender" value="female"></input>
                   <label for="female">Female</label>
                   <select name="selectList" id="selectList">
                       <option value="Admin">Admin</option>
                       <option value="customer">Customer</option>
                   </select>
                   <button type="submit">Save</button>
            </form>
        </div>
    ) 
}