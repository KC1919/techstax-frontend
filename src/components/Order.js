import React from 'react'
import './../css/order.css'
import Item from './Item'

const Order = () => {
  return (
    <>
        <div className='order-container-div'>
            <div className='order-header-div'>
                <h3 style={{marginRight:'1rem'}}>Your Order</h3>
                <h4 style={{color:'red',marginLeft:'1rem'}}>Add items +</h4>
            </div>
        </div>
        <Item name="Margherita A" price="412.00" ingredients="crab & cucumber" itemNumber="2"/>
        <hr />
        <Item name="Margherita B" price="112.00" ingredients="tuna & cucumber" itemNumber="1"/>
        <hr />
        <Item name="Margherita C" price="1236.00" ingredients="somked salmon over rice with extra sauce to check if this line works" itemNumber= "3"/>
    </>
  )
}

export default Order