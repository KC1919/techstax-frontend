import React from 'react'
import './../css/header.css'

const Header = () => {
  return (
    <div className='header-container-div'>
        <div className='heading-div'>TSX PIZZERIAS</div>
        <div className='delivery-option-div'>
            <div className='option-div'><button className='delivery-option-btn'>Delivery</button></div>
            <div className='option-div'><button className='pickup-option-btn'>Pickup</button></div>
        </div>
        <div className='info-div-container'>
            <h6>25 mins</h6>
            <h6>Rs. 20</h6>
            <h6>Discounts</h6>
        </div>
        <div className='delivery-hours'>
            <h6>Menu Hours: 10:00 AM to 11:00 PM</h6>
        </div>
    </div>
  )
}

export default Header