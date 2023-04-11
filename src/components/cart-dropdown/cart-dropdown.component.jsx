import './cart-dropdown.style.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckOutHandle = () => {
        navigate('/checkout')
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(cartItem => {
                    return (<CartItem key={cartItem.id} cartItem={cartItem}/>)
                })}
            </div>
            <Button onClick={goToCheckOutHandle}>GO TO CHECKOUT</Button>
        </div>
    )
}


export default CartDropdown