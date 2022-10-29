import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import loginImg from '../../Images/loginImg/login.png';
import { NavLink } from 'react-router-dom';


const Login = () => {
    


    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                <button className='Googole-SignUp'>Googole SignUp</button>
                </Col>
                <Col sm={6}>
                    <span>Already have an account? <NavLink to='/registration'> <button className='Already-have-an-account-btn'>Sign Up</button></NavLink></span>
                    <img src={loginImg} alt=''/>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;