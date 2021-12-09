import React, { useContext } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './styles.module.scss'
// import { AuthContextProvider } from '../../contexts/AuthContext'
import ProductItem from '../../utils/ProductItem/ProductItem'
import { AuthContext } from '../../contexts/AuthContext'

function ProductPage() {
    const state = useContext(AuthContext)
    const [products] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <Container>
            <Row>
                <Header />
            </Row>
            <Row>
                <Col xl="12">
                    <div className={styles.breadcrum}>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl="3">
                    Category List
                </Col>
                <Col xl="9">
                    <div className={styles.product}> 
                        Product List
                        {
                            products.map(product =>{
                                return < ProductItem key={product._id} product={product} 
                                isAdmin={isAdmin} />
                            })
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default ProductPage
