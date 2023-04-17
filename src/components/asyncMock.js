const products = [
{
    id :'1',
    name: 'Cuenco',
    price: 2500,
    category: 'vajilla',
    info: 'soy un lindo cuenquito para comidas calentitas',
    stock: '12',
    img: 'https://w7.pngwing.com/pngs/670/112/png-transparent-ceramic-pottery-bowl-glassware-and-bowls-miscellaneous-mixing-bowl-pottery.png'
},
{
    id :'2',
    name: 'Buho',
    price: 12000,
    category: 'decoJardin',
    info: 'soy un lindo buhito para decorar el patio',
    stock: '5',
    img: 'https://w7.pngwing.com/pngs/124/870/png-transparent-owl-ceramic-owl-animals-owl-bird.png'
},
{
    id :'3',
    name: 'Set deco',
    price: 10000,
    category: 'decoInterior',
    info: 'set de animales abstracto para decorar el interior de tu casa ',
    stock: '8',
    img: 'https://img2.freepng.es/20180313/tcq/kisspng-ceramic-porcelain-ornament-figurine-decorative-art-tv-cabinet-ceramic-crafts-wedding-gift-5aa81e0f7fb830.2462291415209671835232.jpg'
},
{
    id :'4',
    name: 'Bacha1',
    price: 15000,
    category: 'decoInterior',
    info: 'Bacha para baño o cocina',
    stock: '4',
    img: 'https://i.pinimg.com/originals/48/b7/8d/48b78d89c96bf09d8af872da137c3ab3.jpg'
},
{
    id :'5',
    name: 'Bacha2',
    price: 15000,
    category: 'decoInterior',
    info: 'Bacha para baño o cocina',
    stock: '4',
    img: 'https://i.pinimg.com/originals/48/b7/8d/48b78d89c96bf09d8af872da137c3ab3.jpg'
},
{
    id :'6',
    name: 'Bacha3',
    price: 15000,
    category: 'decoInterior',
    info: 'Bacha para baño o cocina',
    stock: '4',
    img: 'https://i.pinimg.com/originals/48/b7/8d/48b78d89c96bf09d8af872da137c3ab3.jpg'
},
{
    id :'7',
    name: 'Bacha4',
    price: 15000,
    category: 'decoInterior',
    info: 'Bacha para baño o cocina',
    stock: '4',
    img: 'https://i.pinimg.com/originals/48/b7/8d/48b78d89c96bf09d8af872da137c3ab3.jpg'
},

]
export const getProtucts = () => {
    return new Promise ((resolve)  =>{
        setTimeout (()=> {
            resolve (products)
        }, 100)
    })
}
export const getProductById = (productId) =>{
    return new Promise ((resolve)  =>{
        setTimeout (()=> {
            resolve (products.find (prod => prod.id === productId))
        }, 200)
    })
}

export const getProductByCategory = (categoryId) =>{
    return new Promise ((resolve)  =>{
        setTimeout (()=> {
            resolve (products.filter (prod => prod.category === categoryId))
        }, 100)
    })
}