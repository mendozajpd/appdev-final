import React, { useState, useContext } from "react";
import { Container, Button, Card, Image, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import RootNavbar from "../../ui/RootNavbar";
import logocat from '../../../assets/images/logo-cat.png';

// Prime React
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { FloatLabel } from "primereact/floatlabel";

// Services
import { login } from '../../../services/AccountServices';

// Context
import ToastContext from '../../../context/ToastContext';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const showToast = useContext(ToastContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            navigate('/');
            localStorage.setItem('token', "Bearer " + response.access_token);
            console.log(response);
            // Navigate to another page or do something with the response
        } catch (error) {
            console.error('Error during login:', error);
            showToast('error', 'Error', 'Invalid email or password!') // Show an error message
            // Show an error message
        }
    };

    return (
        <Container fluid className="vh-100 g-0">
            <RootNavbar />
            <div className="h-100 text-white justify-content-center d-flex align-items-center">
                <div className="d-flex justify-content-center flex-column">
                    <Card style={{ width: '50rem', minHeight: '40rem' }}>
                        <Card.Body>
                            <Card.Title className="justify-content-center d-flex">
                                <Image src={logocat} alt="logo" className="logo" style={{ height: '6rem', width: '6rem' }} />
                            </Card.Title>
                            <Card.Title className="justify-content-center d-flex">
                                <div className="display-5 text-bold">
                                    Sign in to PetMatch
                                </div>
                            </Card.Title>
                            <Card.Text className="justify-content-center d-flex m-5 flex-column align-items-center">
                                <div className="my-3">
                                    <FloatLabel>
                                        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '17.5rem' }} />
                                        <label htmlFor="email">Email</label>
                                    </FloatLabel>
                                </div>
                                <div className="my-3">
                                    <FloatLabel>
                                        <Password value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} tabIndex={1} />
                                        <label htmlFor="password">Password</label>
                                    </FloatLabel>
                                </div>
                                <div className="my-2">
                                    <Button variant='light' className='text-bold' style={{ border: '1px solid #a7a7a7', borderRadius: '1rem', width: '10rem' }} onClick={handleLogin}>
                                        <div className="text-green">
                                            Log in
                                        </div>
                                    </Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="justify-content-center d-flex">
                            <div>
                                Don't have an account? <Link to="/landing/register">Sign up</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

export default LoginPage;