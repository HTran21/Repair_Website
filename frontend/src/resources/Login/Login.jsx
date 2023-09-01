import className from 'classnames/bind'
import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const cx = className.bind(styles)

function Login() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasword = () => {
        setPasswordShown(!passwordShown);
    }
    return (
        <div className="container">
            <div className={cx("formLogin")}>
                <div className={cx("titleForm")}>
                    <img className={cx("logoFrom")} src="../../../../img/logo/logo1.jpg" alt='logo' />
                    <h2 className={cx("title")}>LOGIN</h2>
                    <p className={cx("desForm")}>Vui lòng đăng nhập bằng tài khoản của bạn</p>
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
                    <button type='submit' className={cx("btnLogin")}>Login</button>

                    <p className='text-light text-center'>Bạn đã có tài khoản chưa?
                        <Link to="/Register"
                            className={`text-decoration-none ${cx("textLink")}`}>
                            <strong> Sign up</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Login;