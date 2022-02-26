import React, { useState } from 'react';
import './Color.scss';

ColorBox.propTypes = {

};

const getRandomColor = () => {
    const listColor = ['deeppink', 'green', 'blue', 'yellow', 'black', 'red'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return listColor[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className="color-box" style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;