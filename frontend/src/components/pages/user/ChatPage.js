import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import { Image, Card, Row, Button, Col } from "react-bootstrap";

// Prime React
import { Dialog } from 'primereact/dialog';

function ChatPage() {
    const navigate = useNavigate();

    useEffect(() => {
        checkForSidebar();
    }, []);

    const checkForSidebar = () => {
        const sidebarState = localStorage.getItem('sidebarState')
        if (sidebarState === 'messages') {
            
        } else {
            redirectToMatches()
        }
    }

    const redirectToMatches = () => {
        navigate('/')
    }

    return (
        <div className=" h-100 d-flex justify-content-center py-5" style={{ minWidth: '50rem' }}>
            chat
        </div>
    )
}

export default ChatPage;

