import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './productItem.module.scss'

function ProductItem({product, isAdmin}) {
    const state = useContext(AuthContext)
    const addCart = state.userAPI.addCart

    return (
        <div className={styles.productCard}>
            
            <img src={product.images.url} alt="" />

            <div className={styles.productBox}>
                <h2 title={product.name}>{product.name}</h2>
                <span>${product.price}</span>
                <p>${product.description}</p>
            </div>

            <div className={styles.rowBtn} to="#!">
                <Link id={styles.btnBuy} onClick={()=> addCart(product)}>
                    + Quick shop
                </Link>
                <Link id={styles.btnView} to={`detail/${product._id}`}>
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductItem
