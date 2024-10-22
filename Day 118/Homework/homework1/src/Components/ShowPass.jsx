import React, { useState } from 'react';

function ShowPass(){
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <form>
                <input type="checkbox" onChange={() => {
                    setChecked(!checked);
                    }} />
                <label htmlFor="check">{checked ? "12345678" : "********"}</label>
            </form>
        </div>
    );
}

export default ShowPass;

