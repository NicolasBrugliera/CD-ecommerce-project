import cuenquito from './download.jpg'
const Product1 = () => {
    return (
        <div className ='prod'>
            <h1>Cuenquito</h1>
            <img src = {cuenquito} alt= '-.-' className='imgProds'></img>
            <p>textito que describiria cortito lo que es el producto</p>
            <p>precio$$$</p>
            <button className='button-prod'>Comprar</button>
        </div>
    )
}

export default Product1