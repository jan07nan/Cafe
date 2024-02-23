import React from 'react'
import './Card.css'
import dle from '../Images/delete.png'
import { useState } from 'react';

function Card(props) {
  const [count, setCount] = useState(0);

    const incre = () => {
        setCount(count + 1);
    };

    const decre = () => {
        setCount(count - 1);
    };
  return (
    <div>
      <div className='card'>
      <div className='name-cost-qty'>
        <div className='name-cost'>
      <p className='name'>{props.name}</p>
      <p className='cost'>{props.cost}</p>
      </div>
      <div className='qty'> 
            <button className='dec' onClick={decre}>-</button>
            <button className='num'>{count}</button>
            <button className='inc'onClick={incre}>+</button>
      </div>
      </div>
      <div className='inputbox'>
      <input className='txtbox'type='text' placeholder='Insert any notes...' />
      <button className='delete-btn'> <img src={dle} className='img-delete' alt="delete"/> </button>
      </div>
        </div>
    </div>
  )
}

export default Card
