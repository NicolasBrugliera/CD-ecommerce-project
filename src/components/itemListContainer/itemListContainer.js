import NavBar from "../NavBar/NavBar";
import Product1 from "../products/product1";
import Footer from "../Footer/Footer";
import './cssComponents/Footer.css'
import './cssComponents/navBar.css'
import './cssComponents/product.css'

const ItemListContainer = ({greeting}) => {
        return(
            <div >
                <h1 className='greeting'>{greeting}</h1>
            <div className = 'prodsApp'>
                <Product1/>
                <Product1/>
                <Product1/>
                <Product1/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        )
}

export default ItemListContainer