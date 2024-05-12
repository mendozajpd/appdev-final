import React from 'react';
import { Container, Image, Tab, Tabs, Card, Row } from "react-bootstrap";

function UserSideBar() {

    const matches = [
        {
            id: 1,
            name: 'Mark',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Bob',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Wade',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Ruby',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            name: 'Aizell',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            name: 'Sean',
            image: 'https://via.placeholder.com/150',
        },
    ]

    const chats = [
        {
            id: 1,
            name: 'Mark',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Bob',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Wade',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Ruby',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            name: 'Aizell',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            name: 'Sean',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 7,
            name: 'Harold',
            image: 'https://via.placeholder.com/150',
        },
    ]

    return (
        <div className="user-sidebar">
            <div className="h-25 bg-softgreen d-flex align-items-end p-4">
                <div className=''>
                    <Image src="https://via.placeholder.com/150" roundedCircle style={{ height: '8rem' }} />
                </div>
            </div>
            <div className="h-75 w-100 d-flex flex-column overflow-hidden">
                <Tabs
                    defaultActiveKey="matches"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="matches" title="Matches">
                        <div className='d-flex flex-wrap'>
                            {matches.map(match => (
                                <Card className="bg-dark text-white m-3 clickable" style={{ minWidth: '6rem', maxWidth: '7rem', minHeight: '8rem' }}>
                                    <Card.Img src={match.image} alt="Card image" />
                                    <Card.ImgOverlay className="d-flex align-items-end">
                                        <Card.Title>{match.name}</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            ))}
                        </div>
                    </Tab>
                    <Tab eventKey="messages" title="Messages">
                        <div className='chatlist'>
                            {chats.map(chat => (
                                <Row className='d-flex chat-y-borders clickable' >
                                    <div className='m-3 d-flex'>
                                        <div>
                                            <Image src={chat.image} roundedCircle style={{ width: '4rem', height: '4rem' }} />
                                        </div>
                                        <div className='p-2'>
                                            <div className='text-bold'>
                                                {chat.name}
                                            </div>
                                            <div className='text-sm'>
                                                Message
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default UserSideBar;