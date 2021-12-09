import React, {useState, useEffect} from 'react'
import axios from 'axios'


function ProductAPI() {
    const [products, setProduct] = useState([])

    const getProduct = async () => {
        const res = await axios.get('http://localhost:5000/api/product')
        setProduct(res.data.products)
    }

    useEffect(() =>{
        getProduct()
    }, [])

    return {
        products: [products, setProduct]
    }
}

export default ProductAPI
