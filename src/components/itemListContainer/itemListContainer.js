import Footer from "../Footer/Footer";
import './cssComponents/Footer.css'
import './cssComponents/navBar.css'
import './cssComponents/product.css'
import { useState, useEffect } from "react";
import {getProtucts, getProductByCategory } from "../asyncMock";
import ItemList from "../products/itemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect (()=>{
        const asyncFunc = categoryId ? getProductByCategory : getProtucts
            
        asyncFunc(categoryId)
                .then(response => {
                    setProducts(response)
                })
                .catch(error=>{
                    console.error(error)
                })
    }, [categoryId])

console.log(products)
console.log(categoryId)

    return(
            <div >
                {/*<h1 className='greeting'>{greeting}</h1>*/}
            <div className = 'prodsApp'>
                <ItemList products={products} />

            </div>
            <div>
                <Footer/>
            </div>
        </div>
        )
}

export default ItemListContainer