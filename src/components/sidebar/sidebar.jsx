import React from "react";
import './styles.css';

const Sidebar = ({onClose, isOpen, children}) => {
    return (
        
        <div 
        className="sidebar"
        style={{
            transform: isOpen ? 'transLateX(0)' : 'transLateX(100%)' 
        }}
        >

            <div className="close-button-container">

                <button onClick={onClose} className="close-button">X</button>

            </div>

            {children}

        </div>

    )
}

export default Sidebar;