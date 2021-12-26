import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { remove_cart, add_cart } from '../../redux/actions/cart';


const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch()

    const removeCart = (item) => {
        dispatch(remove_cart(item))
    };

    const updateQuantity = (item) => {
        dispatch(add_cart(item))
    }

    console.log(cart);

    return (
        <div>
            {cart.map(item => (
                <div>
                    {item.title} - {item.count}
                    <button onClick={() => removeCart(item)}> - </button>
                    <button onClick={() => updateQuantity(item)}> + </button>
                </div>
            ))}

        </div>
    )
}

export default Cart
