import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className="bg-primary bg-opacity-25 p-3">
            <div className="fs-3 p-2 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 container">
                <p className="col-md-4 mb-0 text-light"><FontAwesomeIcon icon={faGear} className='me-2' />2023 Repair</p>
                <a
                    href="/"
                    className={`col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none ${cx("logoFooter")}`}
                >
                    <img src="../../../../../img/logo/logo1.jpg" style={{ width: "60px" }} />
                </a>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="#" className={`m-2 nav-link px-2 text-light navhover ${cx("navhover")}`}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className={`m-2 nav-link px-2 text-light navhover ${cx("navhover")}`}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className={`m-2 nav-link px-2 text-light navhover ${cx("navhover")}`}>
                            Item
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className={`m-2 nav-link px-2 text-light navhover ${cx("navhover")}`}>
                            Contact
                        </a>
                    </li>

                </ul>
            </div>
        </footer >



    );
}

export default Footer;