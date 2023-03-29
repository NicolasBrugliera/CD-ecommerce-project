import CartWidget from "../cartWidget/cartWidget"

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h3 className='main-text'>Moka Ceramica</h3>
            <div className='div-buttons'>
                <button className='button-bajilla'>Vajilla</button>
                <button className='button-bajilla'>Deco Jardìn </button>
                <button className='button-bajilla'>Decoraciòn</button>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar