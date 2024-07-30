import { useState } from "react";


const Count = (props) => {
    const [count, setCount] = useState(props.startingValue);

    const increment = () => {
        setCount(count + props.incrementBy);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        </div>
    )
}

export default Count;