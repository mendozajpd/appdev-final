import React, { useContext, useEffect } from 'react';
import { Image, Tab, Tabs, Card, Row } from "react-bootstrap";

import UserContext from "../../context/UserContext";

function UserSideBar() {

    const { sidebarState, setSidebarState } = useContext(UserContext);

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

    const cardHeight = '16vh';
    const cardWidth = '12vh';

    useEffect(() => {

    }, []);

    const tabHandler = (key) => {
        
    }

    const getCurrentTab = () => {
        const selectedTab = localStorage.getItem('sidebarState');
        switch (selectedTab) {
            case 'matches':
                return 'matches';
            case 'messages':
                return 'messages';
            default:
                return 'matches';
        }
    }

    const handleTabChange = (key) => {
        setSidebarState(key);
        localStorage.setItem('sidebarState', key);
    }

    return (
        <div className="user-sidebar">
            <div className="h-25 bg-softgreen d-flex align-items-end p-4">
                <div className=''>
                    <Image src="https://via.placeholder.com/150" roundedCircle style={{ height: '5rem' }} />
                </div>
                <div className='my-4 mx-3 display-7 text-white text-bold'>
                    My Profile
                </div>
            </div>
            <div className="h-75 w-100 d-flex flex-column overflow-hidden bg-light">
                <Tabs
                    defaultActiveKey={getCurrentTab()}
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    onSelect={(k) => { handleTabChange(k) }}
                >
                    <Tab eventKey="matches" title="Matches">
                        <div className='d-flex flex-wrap'>
                            {matches.map(match => (
                                <Card className="no-select m-2 clickable" style={{ width: cardWidth, height: cardHeight }}>
                                    <div style={{ position: 'absolute', textAlign: 'center', width: cardWidth, height: cardHeight }}>
                                        <Image src={match.image} style={{ objectFit: 'cover', width: cardWidth, height: cardHeight }} />
                                    </div>
                                    <Card.Body className='z-index-5 d-flex align-items-center justify-content-between'>
                                    </Card.Body>
                                    <Card.Footer className='z-index-5 card-footer d-flex justify-content-between'>
                                        <div>
                                            <div className='display-8 text-bold text-white'>
                                                {match.name}
                                            </div>
                                        </div>
                                    </Card.Footer>
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