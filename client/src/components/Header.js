import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    const hendleLogout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }
    return (
        <Navbar className="bg-dark"   expand="lg">
            <Container>
                <Navbar.Brand href="/" className="text-white">Test-Task</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>

                        <Nav.Link>
                            <Link to="/cart" className="text-white" style={{textDecoration:"none"}}><FaShoppingCart/> ViewCart  </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="register" className="text-white" style={{textDecoration:"none"}}>Sign up</Link>
                        </Nav.Link>

                        <Nav.Link>
                            { !token ? 
                            (<Link to="/login" className="text-white" style={{textDecoration:"none"}}> Login </Link>
                            ) : (
                                <Link className="text-white" onClick={() => hendleLogout()} style={{textDecoration:"none"}}>Logout</Link>
                            )
                        }
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>     
    )
}

export default Header;

