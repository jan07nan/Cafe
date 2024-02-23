import React from 'react'
import '../Components/Corner.css'
import noti from '../Images/noti.png';
import Card from './Card'
import Checkout from './Checkout';

function Corner() {
  const name = [
    {name: 'Milkshake choco with oreo',
      cost: 'Rs. 70.000'},
      {name: 'Indomie noddles extra spicy',
      cost: 'Rs. 70.000'},
      {name: 'Indomie noddles extra spicy',
      cost: 'Rs. 70.000'}
  ]
  const nameList = name.map(val => <Card name={val.name} cost={val.cost}> </Card>)
  return (
    <div>
      <div className='orderbar'>
        <div className='order-name'> 
            <h6 className='o-name'>Order list</h6>
            <p className='o-id'>#08400559917</p>
        </div>
        <div className='notify'>
        <img src={noti} alt="notification-image"/>
        </div> </div>
       <div className='tag'>
        <p className='t-name'>Items</p>
        <div className='tag1'></div>
        <div className='cardlist'>
         {nameList}
        </div>
        <div>
          <Checkout  subtotal={167}/>
        </div>
       </div>
    </div>
  )
}

export default Corner
