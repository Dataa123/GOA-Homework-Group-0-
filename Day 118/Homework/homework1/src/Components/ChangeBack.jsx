import React, { useState } from 'react';

function ChangeBack(){
    const [color, setColor] = useState("blue");

    return (
        <div id="back" style={{ backgroundColor: color, width: "200px", height: "100px"}}>
            <button onClick={() => setColor("red")}>Change background color</button>
        </div>
    );
}

export default ChangeBack;