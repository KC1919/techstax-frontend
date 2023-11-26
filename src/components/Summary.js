import React from 'react'
import './../css/summary.css'
import Item from './Item'

const Summary = () => {
  return (
    <>
        <div className='summary-container-div'>
            <div className='summary-header-div'>
                <h2 style={{textDecoration:'underline', textDecorationColor:'#d9534f'}}>Summary</h2>
            </div>
        </div>
        <Item disable="true" name="Subtotal" price="1760.00"/>
        <hr />
        <Item disable="true" name="Discount" price="-759.50"/>
        <hr />
        <Item disable="true" name="Delivery Fee" price="12.00"/>
        <hr />
        <Item disable="true" name="Taxes" price="46.15"/>
        <hr />

        <div className='total-div'>
            <p style={{fontSize:'x-large', fontWeight:'bolder'}}>Total</p>
            <p style={{fontSize:'large', fontWeight:'bolder'}}>Rs 1058.65</p>
        </div>

        <div className='order-btn-div'>
            <button className='order-btn'><b style={{fontSize:'large'}}>Place Order</b></button>
        </div>
    </> 
  )
}

export default Summary