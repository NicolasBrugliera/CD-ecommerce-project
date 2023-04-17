import './item.css'
import ItemCount from '../itemCount/itemCount'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, info, stock, category, img}) => {
    return (
        <div className="card">
            <h2 className="name">{name}</h2>
            <picture className='imgbox'>
                <img src={img} alt={name} className="img"/>
            </picture>
            <p className="info">{info}</p>
            <p className="stock">Stock: {stock}</p>
            <p className="price">${price}</p>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('cantidad agregada',quantity)} />
            <Link to= {`/item/${id}`} className='btncomprar'>Ver Detalle</Link>
        </div>
    )
}

export default Item




//<button className="btncomprar">Ver detalle</button>