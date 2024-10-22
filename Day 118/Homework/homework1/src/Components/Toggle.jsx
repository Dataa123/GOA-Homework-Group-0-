import React, { useState } from 'react';

function Toggle(){
    const [state, setState] = useState("Hello");

    return (
        <div>
            <p>{state}</p>
            <button onClick={() => {setState("Goodbye")}}>Click me to change text</button>
        </div>
    );
}

export default Toggle;