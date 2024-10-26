import { useState } from "react";

function App(){
  const [toDo, setToDo] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    const newTask = e.target.name.value;
    setToDo([...toDo, newTask]);
  }

  function handleDelete(index){
    setToDo(toDo.filter((_, i) => i !== index));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button>Submit</button>

      <ul>
        {toDo.map((task, index) => {
          return (
            <li key={index}>
              <span>{task}</span>
              <button type="button" onClick={() => handleDelete(index)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </form>
  )
}

export default App;