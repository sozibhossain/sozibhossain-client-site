import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { BsPeopleFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="dark" className='header-area'>
            <Container>
                <Navbar.Brand href="#home" className='logo'>Sozib</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form action="#" className='search'>
                        <input type="text" className='search_input' placeholder='Search sozib'/>
                        <button className='search_button'>
                        <BsSearch   className='search_icon'/>
                        </button>
                    </Form>
                <Nav className="me-auto menu-area">
                    <Nav.Link href="#features"><BsHouseDoorFill className="header-menu-area"/></Nav.Link>
                    <Nav.Link href="#features"><BsPeopleFill className="header-menu-area"/></Nav.Link>
                    <Nav.Link href="#pricing"><BsPersonCircle className="header-menu-area"/></Nav.Link>
                </Nav>

                <Nav>
                    <NavLink to="/registration" className='signup-menu'>SignUp</NavLink>
                </Nav>
                <Navbar.Text className='user-name'>
                    Signed in as: <a href="#login">name</a>
                </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;