import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({props}) {
    return (
        <div className="card" >
            <NavLink exact to={`/${props.id}`}>
                <img src={props.cover} alt=""/>
                <p>{props.title}</p>
                <div className='filter'></div>
            </NavLink>
        </div>
    )
}



 
export default Card