import React, { useState } from "react";
import { Container, Button, Card, Image, ListGroup } from "react-bootstrap";
import RootNavbar from "../../ui/RootNavbar";
import logocat from '../../../assets/images/logo-cat.png';
import { useNavigate } from "react-router-dom";

// Prime React
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { FloatLabel } from "primereact/floatlabel";

function LoginPage() {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');

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
                                        <InputText id="email" value={value} onChange={(e) => setValue(e.target.value)} style={{ width: '17.5rem' }} />
                                        <label htmlFor="email">Email</label>
                                    </FloatLabel>
                                </div>
                                <div className="my-3">
                                    <FloatLabel>
                                        <Password value={value1} onChange={(e) => setValue1(e.target.value1)} feedback={false} tabIndex={1} />
                                        <label htmlFor="password">Password</label>
                                    </FloatLabel>
                                </div>
                                <div className="my-2">
                                    <Button variant='light' className='text-bold' style={{ borderRadius: '5rem', width: '10rem' }}>Log in</Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="justify-content-center d-flex">
                            <div>
                                Don't have an account? <a href="/register">Sign up</a>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

export default LoginPage;