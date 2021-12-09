import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./styles.scss"
import { CloseButton } from 'react-bootstrap'
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'
import Home from '../../pages/Home/Home'

export const RegisterForm = () => {
    const [user, setUser] = useState({
        name:'',email: '', password: ''
    })

    // const [navigate, useNavigate]= useState()

    const onChangeRegisterForm = e => {
        const { name, value} = e.target;
        setUser({ ...user, [name]: value})
    }
    const register = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/api/login',{...user})

            localStorage.setItem('firstLogin',true)
            
            window.location.href="/";
            
        } catch (error) {
            // alert(error.response.data.message)
            console.log(error)
        }
    }

    return (
        <>
        <Home />
        <div className="modal">
        <div className="modalOverlay"></div>
        <div className="modalBody">
            <div className="wrapper">
                <div className="formContent">
                    <form className="form" onSubmit={register} >
                        {/* <AlertMessage info={alert} /> */}
                        <CloseButton />
                        <span className="formHeader" > Register</span>
                        <div className="formInputs">
                            <label htmlFor="username" className="formLabel">
                                Name
                            </label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                className="formInput"
                                placeholder="Enter your name..."
                                value ={user.name}
                                onChange ={onChangeRegisterForm}
                            />
                        </div>
                        <div className="formInputs">
                            <label htmlFor="email" className="formLabel">
                                E-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="formInput"
                                placeholder="Enter your email..."
                                value ={user.email}
                                onChange ={onChangeRegisterForm}
                            />

                        </div>
                        <div className="formInputs">
                            <label htmlFor="password" className="formLabel">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className="formInput"
                                placeholder="Enter your password..."
                                value ={user.password}
                                onChange ={onChangeRegisterForm}
                            />

                        </div>
                        <div className="forgot-password">

                        </div>
                        <div className="policy">
                            <div className="policy-container">
                                By creating an account you agree to the
                                <Link to="/termOfService"
                                    className="policyLink">Terms of Service</Link>
                                and
                                <Link to="/privacy"
                                    className="policyLink">Privacy Policy</Link>
                            </div>
                        </div>
                        <button className="form-input-btn"
                            type="submit">
                            Register
                        </button>
                    </form>
                </div>
                <div className="form-login">
                    <span className="login-letter">
                        Do you have an account?

                    </span>
                    <Link to="/login" className="login-link">Log In</Link>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}


