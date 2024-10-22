import React, { useState } from 'react';

function Like(){
    let text = "like";
    const [state, setState] = useState(text);
    const [truthy, setTruthy] = useState(true);

    return (
        <div>
            <p>{state}</p>
            <button onClick={() => {
                if (truthy){
                    setState("Un" + text);
                    setTruthy(false);
                } else {
                    setState(text.charAt(0).toUpperCase() + text.slice(1));
                    setTruthy(true);
                }
            }}>Like</button>
        </div>
    );
}

export default Like;