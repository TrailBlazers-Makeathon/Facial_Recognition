import React from "react";
import './Form.css'
import { useState } from "react";
import Profile from "./Profile";

const Form = () => {

    const [fullName, setFullName] = useState({
        fname: " ",
        lname: " ",
        email: " ",
        phone: " ",
    });


    const inputEvent = (event) => {
        console.log(event.target.value);
    
        console.log(event.target.name);

        const { value, name } = event.target;

        setFullName((preValue) => {
            console.log(preValue);

            return {
                ...preValue,
                [name]: value,
            }
        })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert('form submitted');
    };


    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>  Welcome {fullName.fname} {fullName.lname}</h1>
                        <p>{fullName.email} {fullName.phone}</p>
                        <input type="text" placeholder="Enter Name" /*name="fName"*/ name="fname" onChange={inputEvent} value={fullName.fname} />
                       
                        <input type="text" placeholder="Enter Last Name"  /*name="lName"*/ name="lname" onChange={inputEvent} value={fullName.lname} />

                        <input type="email" placeholder="Enter Email" name="email" onChange={inputEvent} value={fullName.email} />

                        <input type="number" placeholder="Enter Phone Number" name="phone" onChange={inputEvent} value={fullName.phone} />

                        <input type="text" placeholder="Capture image" name="Cimg" onChange={inputEvent} />
                        
                        <Profile/>

                        <input type="text" placeholder="Record Voice" name="Rvoice" onChange={inputEvent} />
                        
                        <button type="submit">Click me</button>

                    </div>
                </form>
            </div>

        </>
    );
};

export default Form;