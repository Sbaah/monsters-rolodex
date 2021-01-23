import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

//props the parameter we get from our functional component
// will send a single monster to the card it to be displayed.
export const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
