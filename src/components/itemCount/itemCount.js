import { useState } from "react";
import './itemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)
    const incremento = () => {
        if (quantity < stock){
            setQuantity (quantity+1)
        }
    }
    const decremento = () => {
        if (quantity > 1 ){
            setQuantity (quantity-1)
        }
    }
    return(
            <div className='counter'>
                <div className="control">
                    <button className="button" onClick={decremento} >-</button>
                    <h4 className="qty">{quantity}</h4>
                    <button className="button" onClick={incremento} >+</button>
                </div>
            </div>
    )
}
export default ItemCount
