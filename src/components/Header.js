import React from 'react'
import './../css/header.css'

const Header = () => {
  return (
    <div className='header-container-div'>
        <div className='heading-div'>TSX PIZZERIAS</div>
        <div className='delivery-option-div'>
            <div className='option-div'><button className='btn btn-primary btn-sm option-btn'>Delivery</button></div>
            <div className='option-div'><button className='btn btn-primary btn-sm option-btn'>Pickup</button></div>
        </div>
    </div>
  )
}

export default Header