import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles.scss'
import Home from '../../pages/Home/Home'
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'
import { CloseButton } from 'react-bootstrap'

export const LoginForm = () => {

    const [user, setUser] = useState({
        email: '', password: ''
    })

    // const [navigate, useNavigate]= useState()

    const onChangeLoginForm = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const login = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/api/login', { ...user })

            localStorage.setItem('firstLogin', true)
            

            window.location.href = "/";

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
                            <form className="form" onSubmit={login}  >
                                {/* <AlertMessage info={alert} /> */}
                                <span className="formHeader" > Log In</span>
                                <div className="formInputs">
                                    <label htmlFor="email" className="formLabel">
                                        E-mail
                                    </label>
                                    <input
                                        id="email"
                                        required
                                        type="email"
                                        name="email"
                                        className="formInput"
                                        placeholder="Enter your name..."
                                        value={user.email}
                                        onChange={onChangeLoginForm}
                                    />
                                </div>
                                <div className="formInputs">
                                    <label htmlFor="password" className="formLabel">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        required
                                        type="password"
                                        name="password"
                                        className="formInput"
                                        placeholder="Enter your password..."
                                        value={user.password}
                                        onChange={onChangeLoginForm}
                                    />

                                </div>


                                <div className="form_remind" >

                                    <div className="remember_check">
                                        <input
                                            type="checkbox"
                                            className="checkbox_remember"
                                        />
                                        <span className="remember_password">
                                            Remember password
                                        </span>
                                    </div>
                                    <div className="forgot_password">
                                        <Link to="#" className="forgot_password_link" >Forgot your password?</Link>
                                    </div>

                                </div>


                                <button className="form-input-btn"
                                    type="submit">
                                    Log In
                                </button>
                            </form>
                        </div>
                        <div className="form-register">
                            <span className="register-letter">
                                Do you have an account?

                            </span>
                            <Link to="/register" className="register-link">Register</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


