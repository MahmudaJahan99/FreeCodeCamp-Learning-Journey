import { useState } from "react";
import './ColorPicker.css';

export const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff")

    function handleColor(e) {
        setColor(e.target.value)
    }

    return (
        <div id="color-picker-container" style={{ backgroundColor: color }}>
            <p>Choose a color using the color input below:</p>
            <input type="color" id="color-input" value={color} onChange={handleColor} />
        </div>
    )
};