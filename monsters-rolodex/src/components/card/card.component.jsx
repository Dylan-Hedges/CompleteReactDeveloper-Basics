import React from 'react';
import './card.styles.css';

//Component that creates the card - recieves monster data as props
export const Card = (props) => {
  //Returns the card container, monster image, name and email - pulls image from an API, uses monster data recieved from props
  return(
    <div className='card-container'>
      <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
      <h2> {props.monster.name} </h2>
      <p> {props.monster.email} </p>
    </div>
  )
}
