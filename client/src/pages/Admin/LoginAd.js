import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import LandingImg from '../../assets/banner3.jpg'

const LoginAd = () => {
    return (
        <>
            <div className="background">
                <img src={LandingImg} className="landing" />
            </div>

            <div className="modal">
                <div className="modalOverlay"></div>
            <div className="header_admin">
                <Logo />
            </div>
                <div className="modalBody">
                    <div className="wrapper">
                        <div className="formContent">
                            <form className="form" >
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
                                    // value={user.email}
                                    // onChange={onChangeLoginForm}
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
                                    // value={user.password}
                                    // onChange={onChangeLoginForm}
                                    />

                                </div>
                                <button className="form-input-btn"
                                    type="submit">
                                    Log In
                                </button>
                                <div className="form_remind" >
                                    <div className="forgot_password">
                                        <Link to="#" className="forgot_password_link" >Forgot your password?</Link>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginAd
