import className from 'classnames/bind'
import styles from './Register.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const cx = className.bind(styles)

function Register() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasword = () => {
        setPasswordShown(!passwordShown);
    }
    const [passwordShown2, setPasswordShown2] = useState(false);

    const togglePasword2 = () => {
        setPasswordShown2(!passwordShown2);
    }
    return (
        <div className="container">
            <div className={cx("formLogin")}>
                <div className={cx("titleForm")}>
                    <img className={cx("logoFrom")} src="../../../../img/logo/logo1.jpg" alt='logo' />
                    <h2 className={cx("title")}>REGISTER</h2>
                    <p className={cx("desForm")}>Đăng ký để được sử dụng dịch vụ</p>
                </div>
                <div className="contentForm">
                    <div className={cx("groupInput")}>
                        <span className={cx("iconInput")}><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} /></span>
                        <input className={cx("inputForm")} name="username" autoComplete='off' placeholder='Username' required></input>

                    </div>
                    <div className={cx("groupInput2")}>
                        <span className={`${cx("iconInput2")} `}><FontAwesomeIcon icon={faLock} style={{ color: "#ffffff", }} /></span>
                        <input className={cx("inputForm2")} name="password" autoComplete='off' placeholder='Password'
                            type={passwordShown ? "text" : "password"} required></input>
                        <FontAwesomeIcon icon={faEye} style={{ color: "#ffffff", }} onClick={togglePasword} className={`pt-2 ${cx("test")}`} />
                        <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#ffffff", }} onClick={togglePasword} className={`pt-2 ${cx("test2")}`} />


                    </div>
                    <div className={cx("groupInput3")}>
                        <span className={`${cx("iconInput3")} `}><FontAwesomeIcon icon={faLock} style={{ color: "#ffffff", }} /></span>
                        <input className={cx("inputForm3")} name="confirmPassword" autoComplete='off' placeholder='Confirm password'
                            type={passwordShown2 ? "text" : "password"} required></input>
                        <FontAwesomeIcon icon={faEye} style={{ color: "#ffffff", }} onClick={togglePasword2} className={`pt-2 ${cx("test3")}`} />
                        <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#ffffff", }} onClick={togglePasword2} className={`pt-2 ${cx("test4")}`} />


                    </div>
                    <button type='submit' className={cx("btnLogin")}>Register</button>

                    <p className='text-light text-center'>Bạn muốn đăng nhập?
                        <Link to="/login"
                            className={`text-decoration-none ${cx("textLink")}`}>
                            <strong> Login</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Register;