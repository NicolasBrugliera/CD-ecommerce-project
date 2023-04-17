import './itemDetail.css'
import ItemCount from '../itemCount/itemCount'

const ItemDetail = ({id, name, price, info, stock, img}) => {
    return (
        <div className="card">
            <h2 className="name">{name}</h2>
            <picture className='imgbox'>
                <img src={img} alt={name} className="img"/>
            </picture>
            <p className="infoDetail">{info}</p>
            <p className="stock">Stock: {stock}</p>
            <p className="price">${price}</p>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('cantidad agregada',quantity)} />
            <button className="bttncomprar">Ver detalle</button>
        </div>
    )
}

export default ItemDetail