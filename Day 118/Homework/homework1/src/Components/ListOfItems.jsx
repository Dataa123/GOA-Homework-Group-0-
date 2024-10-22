import React, { useState, useTransition } from "react";

function ListOfItems(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState();

    function handleSubmit(e){
        e.preventDefault();

        setTasks([...tasks, <p>{task}</p>]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" onChange={(e) => {setTask(e.target.value)}} />
            </form>
            {tasks.map((task, index) => (
                <p key={`${task}${index}`}>{task}</p>
            ))}
        </div>
    );
}

export default ListOfItems;