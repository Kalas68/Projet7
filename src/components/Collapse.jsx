import React from 'react';
import { useState } from 'react';
import arrowCollapse from '../assets/arrowCollapse.svg'

function Collapse ({header, content, addClass}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapseContainer" id={header}>
            <img src={arrowCollapse} alt="toggleCollapse" onClick={toggleMenu} 
            className={isOpen 
                ? "arrowCollapse" 
                : "arrowCollapse arrowCollapseClosed"}
                />
            <div className="headerCollapse" onClick={toggleMenu}>
                <p>{header}</p>
            </div>
            <ul className={isOpen 
                ? "collapseContent" 
                : "collapseContentClosed"}>
                {typeof content === "string" ? (
                <li className="liCollapse">{content}</li>
                ) : (
                content.map((element, index) => (
                    <li
                    className="collapse__content__element list sizep"
                    key={element + index}
                    >
                    {element}
                    </li>
                ))
                )}
            </ul>
            


        </div>
    )
}



export default Collapse;