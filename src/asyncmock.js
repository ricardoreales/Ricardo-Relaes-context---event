const products = [
    { 
        id: '1', 
        name: 'iphone 12', 
        price: 1000, 
        category: 'celular', 
        img:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { id: '2', name: 'samsung s21', price: 800, category: 'celular', img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock: 16, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img:'https://images.fravega.com/f1000/c9f97b195f09106a00593a967b6241e2.jpg', stock: 10, description:'Descripcion de Ipad'},
    { id: '4', name: 'notebook', price: 2200, category:'notebook', img:'https://http2.mlstatic.com/D_NQ_NP_995172-MLA49580144891_042022-V.jpg', stock: 10, description:'Notebook'}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 200)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 200)
    })
}