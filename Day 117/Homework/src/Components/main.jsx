import React from "react";
import { useState } from "react";

function Main(){
    const [truthy, setTruthy] = useState(true);
    return (
        <div>
            <p>{truthy ? "Hello World" : ""}</p>
            <button onClick={() => {
                if (truthy == true){
                    setTruthy(false);
                } else {
                    setTruthy(true);
                }
            }}>Click to hide paragraph</button>
        </div>
    );
};

export default Main;