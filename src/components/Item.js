import React from 'react'
import './../css/item.css'

const Item = (props) => {
  return (
    <div className='item-container-div'>
        <div className='item'>
            <div className='item-name-div'>
                <h5>{props.disable!=="true"?<button className='btn-danger'>{props.itemNumber}</button>:null} {props.name}</h5>
                <p style={{color:'grey', wordWrap: 'normal'}}>{props.ingredients}</p>
            </div>
            <div className='item-price-div'>
                <h5 style={{color:'grey'}}>Rs {props.price}</h5>
            </div>
        </div>
    </div>
  )
}

export default Item