import React, { useState } from "react";

function Submission(){
    const [personName, setPersonName] = useState("");
    const [personEmail, setPersonEmail] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        setPersonName(e.target.name.value);
        setPersonEmail(e.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" />
                <input type="email" placeholder="Email" name="email" />
                <input type="submit" />
            </form>
            <p>{personName} {personEmail}</p>
        </div>
    );
}

export default Submission;