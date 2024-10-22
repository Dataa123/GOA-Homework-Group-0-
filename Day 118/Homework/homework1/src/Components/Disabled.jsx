import React, { useState } from "react";

function Disabled(){
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <input type="checkbox" onChange={() => setChecked(!checked)} />
            <br />
            <button disabled={checked}>Click checkbox if you want me to be disabled</button>
        </div>
    );
}

export default Disabled;