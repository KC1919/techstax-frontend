import React from 'react'
import { useState } from 'react';
import useRazorpay from "react-razorpay";
import './../css/summary.css'
import Item from './Item'
import OrderPlaced from './OrderPlaced';

const Summary = () => {

    let order;

    const [Razorpay] = useRazorpay();

    const [orderBtnStatus, setOrderBtnStatus]=useState(true);

    const [orderSummStatus, setOrderSummStatus]=useState(true);

    const createOrder=async (params)=>{
        try {
            const response=await fetch('https://techstax-backend.onrender.com/placeOrder',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include',
                body: JSON.stringify({amount:100})
            });

            const jsonResp=await response.json();
            return jsonResp.data.order;
        } catch (error) {
            console.log("Failed to make call to backend!!");
            console.log(error);
            alert("Faild to make payment request!, server error")
        }
    }

    const handlePayment = async (params) => {
        order = await createOrder(params); //  Create order on your backend
        const options = {
          key: "rzp_test_m4B2C0m6b6R1NM", // Enter the Key ID generated from the Dashboard
          amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "TechStaX-Assignment-Kunal",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: function (response) {
            setOrderBtnStatus(false);
            setOrderSummStatus(false);
          },
          "callback_url": "https://techstax-frontend.vercel.app/",
          prefill: {
            name: "Test User",
            email: "test@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
      
        const rzp1 = new Razorpay(options);
      
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
      
        rzp1.open()
      };

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

    { orderBtnStatus===true?
        <div className='order-btn-div' onClick={handlePayment}>
            <button className='order-btn'><b style={{fontSize:'large'}} onClick={handlePayment}>Place Order</b></button>
        </div>
        :null
    }
    <OrderPlaced disableStatus={orderSummStatus} orderId={order?order.id:null} totalPrice={order?order.amount:null}/>
    </> 
  )
}

export default Summary