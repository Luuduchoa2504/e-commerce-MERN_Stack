import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import ProductItem from '../../utils/ProductItem/ProductItem'
import styles from './detailPro.module.scss'

function DetailProduct() {
    const params = useParams()
    const state = useContext(AuthContext)
    const [products] = state.productsAPI.productsAPI
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id) {
            products.forEach(product =>{
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params, products])

    if(detailProduct.length === 0) return null;

    return (
        <>
        <div className={styles.detail}>
            <img src={detailProduct.images.url} alt="" />
            <div className={styles.boxDetail}>
                <div className={styles.row}>
                    <h2>{detailProduct.name}</h2>
                    <h6>{detailProduct.product_id}</h6>
                </div>
                <span>${detailProduct.price}</span>
                <p>{detailProduct.description}</p>
                <Link to="/cart" className="cart">Add to Cart </Link>
            </div>
        </div>

        <div>
            <h2>You may also like</h2>
            <div className={styles.products}>
                {
                    products.map(product => {
                        return product.category === detailProduct.category
                        ? <ProductItem key={product._id} product={product} 
                        /> : null
                    })
                }
            </div>
        </div>
        </>
    )
}

export default DetailProduct
