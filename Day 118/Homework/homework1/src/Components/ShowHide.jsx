import React, { useState } from 'react';

function ShowHide(){
    let text = "Hello world";
    const [state, setState] = useState(text);
    const [truthy, setTruthy] = useState(true);

    return (
        <div>
            <p>{state}</p>
            <button onClick={() => {
                if (truthy){
                    setState("");
                    setTruthy(false);
                } else {
                    setState(text);
                    setTruthy(true);
                }
            }}>{ truthy ? "Click me if you want text to dissapear" : "Click me if you want text to show" }</button>
        </div>
    );
}

export default ShowHide;