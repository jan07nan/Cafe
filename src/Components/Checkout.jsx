import React from 'react'

function Checkout(props) {
    const {subtotal} = props;
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
  return (
    <div>
      <div className='checkout'>
        <div className='subtotal'>
          <p className='sub-total'>Subtotal</p>
          <p className='tax'>Tax(10%)</p>
        </div>
        <div className='amount'>
          <p className='rs'>{subtotal.toFixed(2)}</p>
          <p className='rs-tax'>{tax.toFixed(2)}</p>
        </div>
       </div>
       <p className='line'>- - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
       <div className='total'>
        <p className='tot'>Total</p>
        <p className='total-rs'>{total.toFixed(2)}</p>
       </div>
       <div><button className='proceed'>Proceed</button></div>
       <div><button className='cancel'>Cancel</button></div>
    </div>
  )
}

export default Checkout
