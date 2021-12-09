import React from 'react'
import styles from './styles.module.scss'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from '../../pages/Home/Home'
import ProductPage from '../../pages/Product/ProductPage'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Twitter } from '../../assets/twitter-icon.svg'
import { ReactComponent as Facebook } from '../../assets/facebook-icon.svg'
import { ReactComponent as Instagram } from '../../assets/instagram-6-icon.svg'

const Footer = () => {
    return (
        <Container fluid="xl">
            <Container>
                <Row>
                    <Col xl="12">
                        <Row className={styles.footer}>
                            <Col xl="3">
                                <div className={styles.logo}>
                                    <Logo />
                                </div>
                            </Col>
                            <Col xl="6">
                                <ul className={styles.navbar}>
                                    <li >
                                        <Link to="/" element={<Home />} className={styles.navbarItem}>Home</Link>
                                    </li>
                                    <li className={styles.navbarItem}>
                                        <Link to="/product" element={<ProductPage />} className={styles.navbarItem}>
                                            Products
                                        </Link>
                                    </li>
                                    <li className={styles.navbarItem}>Services</li>
                                    <li className={styles.navbarItem}>About us</li>
                                    <li className={styles.navbarItem}>Helps</li>
                                    <li className={styles.navbarItem}>Contact</li>
                                </ul>
                            </Col>
                            <Col xl="3">
                                <ul className={styles.socialLink}>
                                    <li className={styles.linkItem}>
                                        <Twitter />
                                    </li>
                                    <li className={styles.linkItem}>
                                        <Facebook />
                                    </li>
                                    <li className={styles.linkItem}>
                                        <Instagram />
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <div className={styles.footerSeparate}></div>
                    <Col xl="12">
                        <Row>
                            <Col xl="6">
                                <ul className={styles.navbarBot}>
                                    <li className={styles.navbarBotItem}>Home</li>
                                    <li className={styles.navbarBotItem}>Products</li>
                                    <li className={styles.navbarBotItem}>Services</li>
                                    <li className={styles.navbarBotItem}>About us</li>
                                    <li className={styles.navbarBotItem}>Helps</li>
                                    <li className={styles.navbarBotItem}>Contact</li>
                                </ul>
                            </Col>

                            <Col xl="6">
                                <ul className={styles.policy}>
                                    <li className={styles.policyItem}>Private Policy</li>
                                    <li className={styles.terms}>Terms and Condition</li>

                                </ul>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </Container>
    )
}

export default Footer
