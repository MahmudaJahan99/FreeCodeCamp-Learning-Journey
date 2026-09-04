// const { useState } = React;
import { useState } from "react";
import './ToggleText.css'

export const ToggleApp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="toggle-text-body">
            <div id="toggle-container">
                <button onClick={handleToggleVisibility} id="toggle-button">
                    {isVisible ? "Hide" : "Show"} Message
                </button>
                {isVisible && <p id="message">I love freeCodeCamp!</p>}
            </div>
        </div>

    );
};