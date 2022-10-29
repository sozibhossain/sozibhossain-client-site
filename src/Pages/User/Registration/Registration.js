import React, {useState} from 'react';
import { Button, Col, Container,  Form,  Row } from 'react-bootstrap';
import initializeAuthentication from '../../../Firebase/firebase.init';
import loginImg from '../../Images/loginImg/login.png';
import { NavLink } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth";
import './Registration.css';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogon] = useState(false);

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const toggleLogin = e =>{
        setIsLogon(e.target.checked);
    }

    const handleRegistration = e =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        e.preventDefault();
    }
    
    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
        })
    }

    const auth = getAuth();

    return (
        
        <Container>
            <Row>
                <Col sm={6}>
                    <Form onSubmit={handleRegistration}>
                        <h3>Please {isLogin ? 'Login' : 'Registration'}</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Already Registerd?"  onChange={toggleLogin}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    
                <button className='Googole-SignUp' onClick={handleGoogleSignUp}>Googole SignUp</button>
                </Col>
                <Col sm={6}>
                    <span>Already have an account? <NavLink to='/login'> <button className='Already-have-an-account-btn'>Sign In</button></NavLink></span>
                    <img src={loginImg} alt=''/>
                </Col>
            </Row>
        </Container>
            
        
    );
};

export default Registration;