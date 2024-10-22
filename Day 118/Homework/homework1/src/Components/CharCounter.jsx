import React, { useState } from "react";

function CharCounter(){
    const [inputT, setInputT] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        setInputT(e.target.name.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" />
                <input type="submit" />
            </form>
            <p>Characters: {inputT.length}</p>
        </div>
    );
}

export default CharCounter;