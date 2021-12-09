import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../assets/banner3.jpg'
import styles from './styles.module.scss'
import MenImg from '../../assets/men.jpg'
import LadyImg from '../../assets/lady.jpg'
import GirlImg from '../../assets/girls.jpg'
import BoyImg from '../../assets/boys.jpg'

const Home = () => {
    return (
        <Container>
            <Row>
                <Header />
            </Row>
            <Row>
                <Col xl="12">
                    <div className={styles.banner}>
                        <img src={Banner} className={styles.bannerImg} />
                        <button className={styles.bannerBtn}>Shop now</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl="12">
                    <Row >
                        <Col xl="3">
                            <div className={styles.genderWrapper}>
                                <img src={MenImg} className={styles.wrapperItem} />
                                <div className={styles.wrapperCategory}>
                                    <span className={styles.gender}>Men</span>
                                    <button className={styles.shopNow}>ShopNow</button>
                                </div>
                            </div>
                        </Col>
                        <Col xl="3">
                            <div className={styles.genderWrapper}>
                                <img src={LadyImg} className={styles.wrapperItem} />
                                <div className={styles.wrapperCategory}>
                                    <span className={styles.gender}>Ladies</span>
                                    <button className={styles.shopNow}>ShopNow</button>
                                </div>
                            </div>
                        </Col>
                        <Col xl="3">
                            <div className={styles.genderWrapper}>
                                <img src={GirlImg} className={styles.wrapperItem} />
                                <div className={styles.wrapperCategory}>
                                    <span className={styles.gender}>Girls</span>
                                    <button className={styles.shopNow}>ShopNow</button>
                                </div>
                            </div>
                        </Col>
                        <Col xl="3">
                            <div className={styles.genderWrapper}>
                                <img src={BoyImg} className={styles.wrapperItem} />
                                <div className={styles.wrapperCategory}>
                                    <span className={styles.gender}>Boys</span>
                                    <button className={styles.shopNow}>ShopNow</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default Home
