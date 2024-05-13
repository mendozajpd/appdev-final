import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import { Image, Card, Row, Button, Col } from "react-bootstrap";

// Prime React
import { Dialog } from 'primereact/dialog';
import { Menubar } from 'primereact/menubar';

function ChatPage() {

    const navigate = useNavigate();
    const { id } = useParams();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        }
    ];

    const conversation = [
        {
            id: 1,
            name: 'Mark',
            userID: 1,
            image: 'https://via.placeholder.com/150',
            message: 'Hello'
        },
        {
            id: 2,
            name: 'Bob',
            userID: 2,
            image: 'https://via.placeholder.com/150',
            message: 'Hi'
        },
        {
            id: 3,
            name: 'Wade',
            userID: 1,
            image: 'https://via.placeholder.com/150',
            message: 'Hey'
        }
    ]

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

    useEffect(() => {
        // checkForSidebar();
    }, []);

    return (
        <>
            <Row className='bg-light py-4 px-5 d-flex flex-row position-fixed w-100'>
                <div className='d-flex'>
                    <div>
                        <Image src='https://via.placeholder.com/150' roundedCircle style={{ height: '4rem', width: '4rem' }} />
                    </div>
                    <div className='p-2'>
                        <div>
                            CONVERSATION {id}
                        </div>
                        <div>
                            Matched on 12/12/2021
                        </div>
                    </div>
                </div>
            </Row>
            <div className="h-100 d-flex justify-content-center w-100" style={{ minWidth: '50rem' }}>
                {id ?
                    <>
                        <div className='d-flex align-items-end w-100'>
                            <div className='d-flex flex-column  w-100'>
                                {conversation.map((person) => (
                                    <div className=''>
                                        nice {person.id}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        Select a conversation to start chatting!
                    </>
                }
            </div >
        </>
    )
}

export default ChatPage;

