import React from 'react'
import'./ListCard.css'

function ListCard(props) {
  return (
    <div className='card-tag'>
         <p className='imgs'><img className='imgs-food'src={props.image} alt='noodles-img'/></p>
        <div className='foood'>
          <p className='food-name'>{props.name}</p>
          <p className='food-cost'>{props.cost}</p>
          </div>
    </div>
  )
}

export default ListCard
