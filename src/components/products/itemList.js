import Item from "../items/item"
import './itemList.css'

const ItemList =  ({products})=> {
    return (
        <div className="itemlist">
            {products.map(prod=> <Item key= {prod.id} {...prod}/> )}
        </div>
    )
}

export default ItemList