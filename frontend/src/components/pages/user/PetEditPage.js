import React, { useState, useMemo, useRef } from 'react'
import { Image, Card, Row, Button, Col, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

// Prime React
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';

function PetEditPage() {

    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    const openProfileDetails = () => {
        console.log('open profile details')
        setVisible(true)
    }

    const goBack = () => {
        navigate(-1);
    }

    const onUpload = () => {
        // toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    return (
        <>
            <div className=" h-100 d-flex justify-content-center py-5 profile-content" style={{ minWidth: '50rem' }}>
                <Card className='overflow-auto' style={{ width: '30rem', maxHeight: '100vh' }}>
                    <Card.Header>
                        <div className='d-flex align-items-center'>
                            <i className="fa fa-arrow-left mx-2 clickable" onClick={() => goBack()} />
                            <div className='text-bold display-8'>
                                Edit Pet Details
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Upload Photo</Card.Title>
                        <Card.Text>
                            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
                        </Card.Text>
                        <Card.Title>Description</Card.Title>
                        <Card.Text>
                            <InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button variant='secondary' disabled>
                            Undo
                        </Button>
                        <Button variant='success' className='mx-2'>
                            Save Changes
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default PetEditPage;

