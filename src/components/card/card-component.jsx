import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monseer.id}?set=set2&size=180x180`}/>
       <h2>{props.monseer.name}</h2>
       <p>{props.monseer.email}</p>


    </div>
)