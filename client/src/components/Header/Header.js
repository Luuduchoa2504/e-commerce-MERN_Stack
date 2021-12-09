import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Cart } from '../../assets/cart.svg'
import Ava from '../../assets/Ava.jpg'
import styles from './styles.module.scss'
import { RegisterForm } from '../Register/RegisterForm'
import { LoginForm } from '../Login/LoginForm'
import { AuthContext } from '../../contexts/AuthContext'
import UserAPI from '../../api/UserAPI'


const Header = () => {
    const state = useContext(AuthContext)
    const [isLogged] = state.userAPI.isLogged
    const [cart] =state.userAPI.cart

    const logoutUser = async () => {
        await axios.get('http://localhost:5000/api/logout')
        localStorage.clear()
        window.location.href="/"
    }

    return (
        <Container>
            <Row>
                <Col xl="12">
                    <Row className={styles.header}>
                        <Col xl="4">
                            <div className={styles.searchHeader}>
                                <input
                                    type="text"
                                    name="search"
                                    className={styles.searchInput}
                                    placeholder="Search"
                                />
                            </div>
                        </Col>
                        <Col xl="4">
                            <div className={styles.logo}>
                                <Logo />
                            </div>
                        </Col>
                        <Col xl="4">
                            <div className={styles.personal}>
                                {
                                    !isLogged ? (
                                        <>
                                            <Link to="/register" element={<RegisterForm />} className={styles.registerLink} >Register</Link>
                                            <Link to="/login" element={<LoginForm />} className={styles.loginButton}>LogIn</Link>
                                        </>
                                    ) : (
                                        <>
                                            <div className={styles.personalItem}>
                                                <img src={Ava} className={styles.itemImg} />
                                            </div>
                                            <ul className={styles.personalMenu} >
                                                <li  ><Link to="/accountsetting" className={styles.menuItem}>Account Setting</Link></li>
                                                <li ><Link to="/" className={styles.menuItem} onClick={logoutUser}>Log out</Link></li>
                                            </ul>
                                        </>
                                    )
                                }
                                <Link to="#">
                                    <span>{cart.length}</span>
                                    <Link to="/cart"><Cart /> </Link>
                                </Link>
                            </div>

                        </Col>
                    </Row>
                </Col>

                <Col xl="12">
                    <Row className="justify-content-center">
                        <Col xl="4">
                            <div>
                                <ul className={styles.headerNav}>
                                    <li>Men</li>
                                    <li>Ladies</li>
                                    <li>Girls</li>
                                    <li>Boys</li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header
