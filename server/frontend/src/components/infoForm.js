import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./infoForm.css";

const InfoForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [medicalHistory, setMedicalHistory] = useState("");
    const [messageContent, setMessageContent] = useState("");
    let navigate = useNavigate();


    const submitHandler = (event) => {
        event.preventDefault();
        const user = {
            firstName,
            lastName,
            email,
            phone,
            messageContent,
            medicalHistory,
        };
        navigate("/qrpage")
        console.log(user);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label> First Name </label>
                <input
                    type="text"
                    placeholder="first name"
                    onInput={(e) => setFirstName(e.target.value)}
                ></input>
            </div>
            <div>
                <label> Last Name </label>
                <input
                    type="text"
                    placeholder="last name"
                    onInput={(e) => setLastName(e.target.value)}
                ></input>
            </div>
            <div>
                <label> Email </label>
                <input
                    type="email"
                    placeholder="email address"
                    onInput={(e) => setEmail(e.target.value)}
                ></input>
            </div>
            <div>
                <label> Phone </label>
                <input
                    type="tel"
                    placeholder="phone number"
                    onInput={(e) => setPhone(e.target.value)}
                ></input>
            </div>
            <div>
                <label> Message Content </label>
                <input
                    type="text"
                    placeholder="message content"
                    onInput={(e) => setMessageContent(e.target.value)}
                ></input>
            </div>
            <div>
                <label> Medical History </label>
                <input
                    type="text"
                    placeholder="medical message"
                    onInput={(e) => setMedicalHistory(e.target.value)}
                ></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default InfoForm;
