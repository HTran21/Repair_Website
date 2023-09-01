import styles from "./Header.module.scss"
import classNames from 'classnames/bind';
// import Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Tippy for dropdown
import Tippy from '@tippyjs/react/headless';
// Wrapper
import Wrapper from '../../../Popper/Wrapper';


const cx = classNames.bind(styles);

function Header() {
    return (
        <div className="bg-primary bg-opacity-25 p-2">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src='../../../../../img/logo/logo1.jpg' className={cx("imgLogo")} />

                    </Navbar.Brand>
                    <span className={cx("textLogo")}>REPAIR</span>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
                        width: "60px",
                        border: "1px #585858 solid",
                        height: "40px"

                    }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" >
                                <div className={cx("navLinkColor", "active")}><p>Home</p></div>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <div className={cx("navLinkColor")}><p>About</p></div>

                            </Nav.Link>
                            <Nav.Link href="#home" >
                                <div className={cx("navLinkColor")}><p>Item</p></div>

                            </Nav.Link>
                            <Nav.Link href="#link">
                                <div className={cx("navLinkColor")}><p>Contact</p></div>

                            </Nav.Link>
                            <Tippy
                                interactive
                                placement='bottom'
                                render={attrs => (
                                    <Wrapper>
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <ul>
                                                <li>Trang ca nhan</li>
                                                <li>Dang Xuat</li>
                                                <li>Dang Xuat</li>
                                            </ul>
                                        </div>
                                    </Wrapper>

                                )}
                            >
                                <div className={cx("infoUser")}>
                                    <img src='../../../../../img/logo/avatar.jpg' className={cx("imgUser")} />
                                    <span className={cx("nameUser")}>Tran</span>
                                </div>
                            </Tippy>



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar >

        </div>
    );
}

export default Header;