import React, { useState, useContext, useRef } from "react";
import { Container, Button, Card, Image, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import RootNavbar from "../../ui/RootNavbar";
import logocat from '../../../assets/images/logo-cat.png';

// Prime React
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from 'primereact/calendar';
import { FileUpload } from 'primereact/fileupload';

// Services
import { register } from '../../../services/AccountServices';

// Context
import ToastContext from '../../../context/ToastContext';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthDate] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);
    const showToast = useContext(ToastContext);

    const fileUploadRef = useRef(null);
    const navigate = useNavigate();

    const clearFields = () => {
        fileUploadRef.current.clear();
        setName('');
        setEmail('');
        setPassword('');
        setBirthDate(null);
        setUploadedFile(null);
    }

    const handleRegister = async () => {
        const file = fileUploadRef.current.getFiles()[0];
        console.log('uploadedFile', file)

        if (name === '') {
            showToast('error', 'Error', 'Name cannot be empty!')
            return;
        }
        if (email === '') {
            showToast('error', 'Error', 'Email cannot be empty!')
            return;
        }
        if (password === '') {
            showToast('error', 'Error', 'Password cannot be empty!')
            return;
        }
        if (file === null) {
            showToast('error', 'Error', 'Profile picture cannot be empty!')
            return;
        }
        if (birthday === null) {
            showToast('error', 'Error', 'Birthday cannot be empty!')
            return;
        }
        const formattedBirthDate = birthday.toISOString().split('T')[0];

        // Create a new FormData instance
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('uploadedFile', file);
        formData.append('birthday', formattedBirthDate);

        try {
            showToast('success', 'Success', 'User registered successfully')
            const response = await register(formData); // Send formData instead of userData
            clearFields();
            navigate('/landing/login');
            console.log(response);
        } catch (error) {
            showToast('error', 'Error', error)
            console.error('Error during registration:', error);
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
                                    Create an Account
                                </div>
                            </Card.Title>
                            <Card.Text className="justify-content-center d-flex m-5 flex-column align-items-center">
                                <div className="my-3">
                                    <FloatLabel>
                                        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '17.5rem' }} />
                                        <label htmlFor="name">Name</label>
                                    </FloatLabel>
                                </div>
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
                                <div className="my-3">
                                    <FileUpload ref={fileUploadRef} mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} />
                                </div>
                                <div className="my-3">
                                    <FloatLabel>
                                        <Calendar inputId="birth_date" value={birthday} onChange={(e) => setBirthDate(e.value)} placeholder="Birthday" />
                                        <label htmlFor="birth_date">Birth Date</label>
                                    </FloatLabel>
                                </div>
                                <div className="my-2">
                                    <Button variant='light' className='text-bold' style={{ border: '1px solid #a7a7a7', borderRadius: '1rem', width: '10rem' }}
                                        onClick={handleRegister}>
                                        <div className="text-green">
                                            Register
                                        </div>
                                    </Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="justify-content-center d-flex">
                            <div>
                                Already have an account? <Link to="/landing/login">Log in</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

export default RegisterPage;