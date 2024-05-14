import React, { useContext, useEffect, useState } from 'react';
import { Image, Tab, Tabs, Card, Row, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import UserContext from "../../context/UserContext";

// Services
import { logout, getPFP } from '../../services/AccountServices';

// PrimeReact
import { Sidebar } from 'primereact/sidebar';
import { InputSwitch } from 'primereact/inputswitch';

// Assets
import tempIcon from '../../assets/images/profile-icon.jpg';

function UserSideBar() {

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { sidebarState, setSidebarState, user, setUser } = useContext(UserContext);

    // ADOPTION OR NOT
    const [checked, setChecked] = useState(false);

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
    const userPic = '';

    useEffect(() => {
        if (user !== null) {
            setLoading(false);
        }
    }, []);


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

        if (key === 'matches') {
            navigate('/')
        } else {
            navigate('/chat')
        }
    }

    const handleClickMessage = (id) => {
        navigate('/chat/' + id);
    }

    const handleClickProfile = () => {
        setVisible(true);
        navigate('/profile');
    }

    const handleCloseSidebar = () => {
        setVisible(false);
        const tabState = localStorage.getItem('sidebarState');
        if (tabState === 'matches') {
            navigate('/')
        } else {
            navigate('/chat')
        }
    }

    const handleLogout = () => {
        const token = localStorage.getItem('token');
        logout('Bearer ' + token);
        localStorage.removeItem('token');
        navigate('/landing/login');
    }

    if (loading) {
        return <div> Loading...</div>
    }

    return (
        <>
            <div className="card flex justify-content-center">
                <Sidebar
                    visible={visible}
                    onHide={() => handleCloseSidebar()}
                    className="w-25"
                    dismissable={false}
                    closeOnEscape={false}
                    style={{ minWidth: '30rem' }}
                    modal={false}
                >
                    <h2>Settings</h2>
                    <div className='m-5'>
                        <h6>Adoption Mode</h6>
                        <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                    </div>
                    <div className='m-5'>
                        <Button onClick={() => handleLogout()} variant='light' style={{ border: '1px solid #a7a7a7' }}>
                            Logout
                        </Button>
                    </div>
                </Sidebar>
            </div>
            <div className="user-sidebar">
                <div className="h-25 bg-softgreen d-flex align-items-end p-4">
                    <div onClick={() => handleClickProfile()} className='clickable'>
                        {/* <Image src={user ? getPFP(user.user_info.pic) : tempIcon} roundedCircle style={{ height: '5rem', width: '5rem' }} /> */}
                        {user && user.user_info ?
                            <Image src={getPFP(user.user_info.pic)} roundedCircle style={{ height: '5rem', width: '5rem' }} />
                            :
                            <Image src={tempIcon} roundedCircle style={{ height: '5rem', width: '5rem' }} />
                        }
                    </div>
                    <div onClick={() => handleClickProfile()} className='clickable my-4 mx-3 display-7 text-white text-bold'>
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
                                    <Card className="no-select m-2 clickable" style={{ minHeight: '120px', minWidth: '100px', width: cardWidth, height: cardHeight }}>
                                        <div style={{ position: 'absolute', textAlign: 'center', minHeight: '120px', minWidth: '100px', width: cardWidth, height: cardHeight }}>
                                            <Image src={match.image} style={{ objectFit: 'cover', minHeight: '120px', minWidth: '100px', width: cardWidth, height: cardHeight }} />
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
                            <div className='chatlist no-select'>
                                {chats.map((chat, id) => (
                                    <Row onClick={() => handleClickMessage(id)} className='d-flex chat-y-borders clickable chat-conversation' >
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
        </>
    )
}

export default UserSideBar;