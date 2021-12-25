import React from 'react'

import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log(cart);

    return (
        <div>
            {cart.map(item => (
                <div>
                    {item.productName} - {item.count}
                </div>
            ))}

        </div>
    )
}

export default Cart
