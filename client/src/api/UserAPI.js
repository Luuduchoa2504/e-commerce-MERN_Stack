import axios from 'axios'
import React, {useState, useEffect} from 'react'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const[cart, setCart] = useState([])

    useEffect(()=>{
        if(token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('http://localhost:5000/api/info', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                } catch (error) {
                    alert(error.response.data.msg)
                }
            }

            getUser()
        }
    },[token])

    const addCart = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item => {
            return item._id !== product._id
        })

        if(check) {
            setCart([...cart, {...product, quantity: 1}])

            await axios.patch('http://localhost:5000/api/addCart',{cart: [...cart, {...product, quantity: 1}]}, {
                
            })

        } else {
            alert("This product has been added to cart")
        }
     }
    
    return {
        isLogged:[isLogged,setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart
    }
}

export default UserAPI
