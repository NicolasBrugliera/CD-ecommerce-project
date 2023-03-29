import cart from './cart.jpg'

const CartWidget = () => {
    return (
        <div className= 'cartDiv'>
            <img src = {cart} alt = 'cart' className='imgCart'></img>
            0
        </div>
    )
}
export default CartWidget