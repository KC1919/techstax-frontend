import React from 'react'
import { useState } from 'react'
import './../css/order-placed.css'

const OrderPlaced = (props) => {

    const [disable,setDisable]=useState(false);

    const handleClick=()=>{
        console.log("Hello");
        setDisable(true)
    }

    return (
        <>
            {
                props.disableStatus === false && disable===false ?
                    <div className='order-paced-container-div'>
                        <div style={{ textAlign: 'left' }}>
                            <h6 style={{ fontSize: '15px' }}>Order has been placed successfully. <br /> Confirmation message sent!</h6>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <p><b>Order Id:</b> {props.orderId}</p>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <p><b>Total:</b> Rs {props.totalPrice}</p>
                        </div>
                        <div style={{marginTop:'2rem'}}><button className="btn btn-danger btn-sm" onClick={handleClick}>Back</button></div>
                    </div>
                    : null
            }
        </>
    )
}

export default OrderPlaced