import React, { useState, useMemo, useRef } from 'react'
import { Image, Card, Row, Button, Col, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

// Prime React
import { Dialog } from 'primereact/dialog';

function PetsPage() {

    const navigate = useNavigate();

    const pets = [
        {
            id: 1,
            name: 'Yaqub Qamar Addin Dibiazzah',
            image: 'https://via.placeholder.com/150',
            image2: 'https://via.placeholder.com/300',
        },
        {
            id: 2,
            name: 'Khadir Karawita',
            image: 'https://via.placeholder.com/150',
            image2: 'https://via.placeholder.com/300',
        },
        {
            id: 3,
            name: 'Muhammad Sumbul',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Usman Abdal Jaleel',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            name: 'Ismail Ahmad Kanabawi',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            name: 'King Khalid Khasmiri',
            image: 'https://via.placeholder.com/150',
        },
    ]

    const redirectToProfile = () => {
        navigate('/profile')
    }

    const redirectToPetDetails = (id) => {
        navigate(`${id}`)
    }

    return (
        <>
            <div className=" h-100 d-flex justify-content-center py-5 profile-content" style={{ minWidth: '50rem' }}>
            <Card className='overflow-auto' style={{ width: '30rem', maxHeight: '100vh' }}>
                    <Card.Header>
                        <div className='d-flex align-items-center'>
                            <i className="fa fa-arrow-left mx-2 clickable" onClick={() => redirectToProfile()} />
                            <div className='text-bold display-8'>
                                Pets
                            </div>
                        </div>
                    </Card.Header>
                    <ListGroup className="list-group-flush">
                        {pets.map((pet) => (
                            <ListGroup.Item>
                                <div onClick={() => redirectToPetDetails(pet.id)} className='d-flex clickable-highlight p-2'>
                                    <Image src="https://via.placeholder.com/150" className='mx-3' roundedCircle style={{ height: '5rem' }} />
                                    <div className='text-bold d-flex align-items-center'>
                                        {pet.name}
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item>
                            <div className='d-flex justify-content-center bg-light clickable-highlight p-2'>
                                <div>
                                    <i className="p-2 fa fa-plus-square clickable"></i>
                                </div>
                                <div className='text-bold d-flex align-items-center'>
                                    Add Pet
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </>
    )
}

export default PetsPage;

