import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import styles from './Cart.module.scss'

const Cart = () => {
    const state = useContext(GlobalState)
    const cart = state.userAPI.cart

    if (cart.length === 0) {
        return <h2 style={{ textAlign: "center", fontSize: "5px" }}>Cart Empty </h2>
    }

    return (
        <div>
            {
                cart.map(product => (
                    <div className={styles.detailCart}>
                        <img src={product.images.url} alt="" className={styles.imgContainer} />
                        <div className={styles.boxDetail}>
                            <h2>{product.name}</h2>
                            <h6>{product.product_id}</h6>
                            <span>${product.price * product.quantity}</span>
                            <p>{product.description}</p>
                            <div className={styles.amount}>
                                <button>-</button>
                                <span>{product.quantity}</span>
                                <button>+</button>
                            </div>
                            <div className={styles.delete}>X</div>
                        </div>
                    </div>
                ))
            }

            <div className={styles.total}>
                <h3>Total:$ 0</h3>
                <Link to="#">Check out</Link>
            </div>
        </div>
    )
}

export default Cart
