import React, { useState } from 'react';

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setTasks([...tasks, <p>{task}</p>])
        console.log(e.target.task.value);
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

export default ToDoList;