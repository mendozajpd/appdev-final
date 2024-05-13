import React, { useState, useMemo, useRef } from 'react'
import { Image, Card, Row, Button, Col, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

// Prime React
import { Dialog } from 'primereact/dialog';

function PetDetailsPage() {

    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);

    const openProfileDetails = () => {
        console.log('open profile details')
        setVisible(true)
    }

    const redirectToPets = () => {
        navigate('/pets')
    }

    const redirectToPetEdit = () => {
        navigate('edit')
    }

    return (
        <>
            <div className=" h-100 d-flex justify-content-center py-5 profile-content" style={{ minWidth: '50rem' }}>
                <Card className='overflow-auto' style={{ width: '30rem', maxHeight: '100vh' }}>
                    <Card.Header>
                        <div className='d-flex align-items-center'>
                            <i className="fa fa-arrow-left mx-2 clickable" onClick={() => redirectToPets()} />
                            <div className='text-bold display-8'>
                                Pet Details
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Img variant="top" src="http://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Pet Name</Card.Title>
                        <Card.Text>
                            Description of the pet
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Age</ListGroup.Item>
                        <ListGroup.Item>Born in</ListGroup.Item>
                        <ListGroup.Item>Yesser</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button onClick={() => redirectToPetEdit()} variant='secondary'>
                            Edit
                        </Button>
                        <Button variant='danger' className='mx-2'>
                            Remove Pet
                        </Button>

                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default PetDetailsPage;

