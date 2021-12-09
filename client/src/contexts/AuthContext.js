import { createContext, useReducer, useEffect, useState } from "react";
import axios from 'axios'
import { authReducer } from "../reducers/AuthReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../constants/constants";
import setAuthToken from "../utils/setAuthToken";
import ProductAPI from "../api/ProductAPI";
import UserAPI from "../api/UserAPI";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(false)

    const refreshToken = async () => {
        const res = await axios.get('http://locahost:5000/api/refresh_token')
    
        setToken(res.data.refreshToken)
    }

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if( firstLogin) refreshToken()
    }, [])

    const state = {
        token: [token, setToken],
        productsAPI: ProductAPI(),
        userAPI: UserAPI(token)
    }

	const [authState, dispatch] = useReducer(authReducer, {
		authLoading: true,
		isAuthenticated: false,
		user: null
	})

    //Authenticate user
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
        }

        try {
            const response = await axios.get(`${apiUrl}/`)
            if( response.data.success) {
                dispatch({
                    type:'SET_AUTH',
                    payload: { isAuthenticated: true, user: response.data.user }
                })
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            setAuthToken(null)
            dispatch({ 
                type: 'SET_AUTH', 
                payload: {isAuthenticated: false, user: null} })
        }
    }

    // useEffect(() => loadUser(), [])

    //Login
    const loginUser = async userForm => {
        try {
            const response = await axios
            .post(`http://localhost:5000/api/login`, userForm)
            if(response.data.success)
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME, 
                    response.data.accessToken
                )
                // await loadUser()    
            return response.data
        } catch (error) {
            if (error.response.data) 
            return error.response.data
            else return { success: false, message: error.message }
        }
    }

      //Register
      const registerUser = async userForm => {
        try {
            const response = await axios
            .post(`${apiUrl}/register`, userForm)
            if(response.data.success)
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME, 
                    response.data.accessToken
                )
                // await loadUser()    
            return response.data
        } catch (error) {
            if (error.response.data) 
            return error.response.data
            else return { success: false, message: error.message }
        }
    }

    //Log out
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        dispatch({
            type:'SET_AUTH',
            payload: {isAuthenticated: false, user: null}
        })
    }

    // Context data
    // const authContextData = {loginUser, registerUser,logoutUser, state, authState}

    // Return provider
    return (
        <AuthContext.Provider value={state} >
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContextProvider