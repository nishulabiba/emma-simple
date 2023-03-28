import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('/public/products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])

    const handleProduct = (prod) =>{
        const newCart = [...cart, prod];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key ={product.id}
                    product ={product}
                    handleProduct = {handleProduct}
                    ></Product>)
                }
            </div>
            <div >
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;