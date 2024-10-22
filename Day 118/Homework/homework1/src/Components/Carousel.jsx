import React, { useState } from 'react';

function Carousel(){
    const [index, setIndex] = useState(0);
    const images = ["./src/Images/photo 1.jpg", "./src/Images/photo 2.jpg", "./src/Images/photo 3.jpg"];

    return (
        <div>
            <img src={images[index]} alt="photo" style={{width: 960}}/>
            <br />
            <button onClick={() => {
                if (index == 2){
                    setIndex(0)
                } else {
                    setIndex(index + 1)
                }
            }}>Next</button>
            <button onClick={() => {
                if (index == 0){
                    setIndex(2)
                } else {
                    setIndex(index - 1)
                }
            }}>Previous</button>
        </div>
    );
}

export default Carousel;