import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component.jsx';

//Component that renders the list of cards on screen - receives monster data as props
export const CardList = (props) => {
  //Maps over the list of monsters and returns a <Card /> component for each entry - passes down monster data as props
  return(
      <div className='card-list'>
        {props.monsters.map((monster)=>{
          return <Card key={monster.id} monster={monster} />
        })}
      </div>
  );
}
