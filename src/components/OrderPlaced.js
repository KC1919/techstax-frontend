import React from 'react'
import { useState } from 'react'
import './../css/order-placed.css'

const OrderPlaced = (props) => {

    const [disableStatus, setStatus] = useState(props.disableStatus)

    return (
        <>
            {
                disableStatus === false ?
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
                    </div>
                    : null
            }
        </>
    )
}

export default OrderPlaced