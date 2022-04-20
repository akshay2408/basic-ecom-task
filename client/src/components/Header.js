import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from "react-redux";

const Header = () => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    const hendleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        window.location.reload();
    }
    const loginUser = useSelector(state => state?.userReducer?.userinfo)
    const isLoggedIn = useSelector(state => state?.userReducer?.isLoggedIn)
    const pathname = window.location.pathname


    return (
        <div className="navbar-fixed">
            <Navbar className="bg-dark " expand="lg">
                <Container>
                    <Navbar.Brand href="/" className="text-white">Test-Task</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            {isLoggedIn && <>
                                <Nav.Link>
                                    <div className="text-white" style={{ textDecoration: "none" }}><FaUser />{loginUser?.username}  </div>
                                </Nav.Link>
                                {pathname !== "/" && <Nav.Link>
                                    <Link to="/" className="text-white" style={{ textDecoration: "none" }}> Home  </Link>
                                </Nav.Link>}
                                <Nav.Link>
                                    <Link to="/cart" className="text-white" style={{ textDecoration: "none" }}><FaShoppingCart /> ViewCart  </Link>
                                </Nav.Link>
                            </>
                            }

                            {!isLoggedIn && <Nav.Link>
                                <Link to="register" className="text-white" style={{ textDecoration: "none" }}>Sign up</Link>
                            </Nav.Link>}

                            <Nav.Link>
                                {!isLoggedIn ?
                                    (<Link to="/login" className="text-white" style={{ textDecoration: "none" }}> Login </Link>
                                    ) : (
                                        <Link className="text-white" onClick={(e) => hendleLogout(e)} style={{ textDecoration: "none" }}>Logout</Link>
                                    )
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default Header;

