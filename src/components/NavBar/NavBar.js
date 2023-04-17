import CartWidget from "../cartWidget/cartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to = {'/'} className='main-text'>Moka Ceramica</Link>
            <div className='div-buttons'>
                <NavLink to = {`/category/vajilla`} className='button-bajilla' >Vajilla</NavLink>
                <NavLink to = {`/category/decoJardin`} className='button-bajilla' >Deco Exterior</NavLink>
                <NavLink to = {`/category/decoInterior`} className='button-bajilla' >Deco Interior</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar




//className='button-bajilla'