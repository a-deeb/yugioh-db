import React from 'react';
import './card.styles.css';


 export const Card = props => (
    <div className='card-container'>
        <img alt="yugioh-card" src={`https://storage.googleapis.com/ygoprodeck.com/pics_small/${props.monster.id}.jpg`}/>
        <h3>{ props.monster.name }</h3> 
        <p><b>Type:</b> { props.monster.type }</p>   
    </div>
 )