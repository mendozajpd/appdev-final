import React, { useState, useMemo, useRef, useContext } from 'react'
import { Image, Card, Row, Button, Col, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

// Context
import UserContext from "../../../context/UserContext";

// Services
import { getPFP } from '../../../services/AccountServices';

// Prime React
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

function ProfileDetailsPage() {

    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    const onUpload = () => {
        // toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const redirectToProfile = () => {
        navigate('/profile')
    }



    return (
        <>
            <div className=" h-100 d-flex justify-content-center py-5 profile-content" style={{ minWidth: '50rem' }}>
                <Card className='overflow-auto' style={{ width: '30rem', maxHeight: '100vh' }}>
                    <Card.Header>
                        <div className='d-flex align-items-center'>
                            <i className="fa fa-arrow-left mx-2 clickable" onClick={() => redirectToProfile()} />
                            <div className='text-bold display-8'>
                                Profile Details
                            </div>
                        </div>
                    </Card.Header>
                    {user && user.user_info ?
                        <Card.Img variant="top" src={getPFP(user.user_info.pic)} style={{height:'35rem', objectFit: 'cover'}} /> :
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />

                    }
                    {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                    <Card.Body>
                        <Card.Title>Upload Photo</Card.Title>
                        <Card.Text>
                            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
                        </Card.Text>
                        <Card.Title>New Bio</Card.Title>
                        <Card.Text>
                            <InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button variant='success' className='mx-2'>
                            Save Changes
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ProfileDetailsPage;

