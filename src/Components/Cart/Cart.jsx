import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    //const {cart} = props;
    let totalShipping = 0;
    let total = 0;
    for(let product of cart )
    {
        total = total+product.price;
        totalShipping= totalShipping + product.shipping;
        
    }
    const tax = total*7/100;
    const grand = total+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Total products : {cart.length}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping :{totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h6>Grand Total: ${grand.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;