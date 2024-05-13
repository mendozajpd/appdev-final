import React, { useState, useMemo, useRef } from 'react'
import { Image, Card, Row, Button, Col, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

// Prime React
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

function ProfileDetailsPage() {

    const navigate = useNavigate();

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
                {/* <div className="mx-5 d-flex justify-content-center px-5 profile-card" style={{ width: '30rem' }}>
                    <div className='d-flex flex-column'>
                        <div>
                            <Image src="https://via.placeholder.com/150" style={{ objectFit: 'cover', width: '30rem', height: '30rem' }} />
                        </div>
                        <div className='d-flex p-2 display-7 justify-content-between'>
                            <div className='d-flex'>
                                <div className='text-bold'>
                                    NAME
                                </div>
                                <div className='px-3 display-8 d-flex align-items-end'>
                                    AGE
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className='my-2'>
                            <p className='m-3 text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default ProfileDetailsPage;

