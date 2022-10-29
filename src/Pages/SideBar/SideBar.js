import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import './SideBar.css';
import { Container } from 'react-bootstrap';




const SideBar = ({children}) => {
    const menuItem = [
        {
            path:"/dashboard",
            name:"Post",
        },
        {
            path:"/about",
            name:"Friend ",
        }

    ]

    return (
        <div>
           <div className='sidebar-area'>
                <Container className="sidebar">
                    <div className="top_section">
                        <h1  className="logo"> <BsPersonCircle/> user</h1>
                        <div className="bars">
                            <BsList/>
                        </div>
                    </div>
                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="sidebar-menu" >
                                <div  className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </Container>
                <main>{children}</main>
           </div>
        </div>
    );
};

export default SideBar;