import React, { useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserSideBar from "../ui/UserSidebar";


//Services
import { getProfile } from "../../services/AccountServices";

// Context
import UserContext from "../../context/UserContext";


const UserLayout = () => {

    const [sidebarState, setSidebarState] = useState('')
    const [user, setUser] = useState({})

    useEffect( () => {
        handleProfile();
    }, [])

    const handleProfile = async () => {
        const token = localStorage.getItem('token');
        const profile = await getProfile('Bearer ' + token);
        setUser(profile);
    }

    return (
        <div className="d-flex vh-100">
            <UserContext.Provider value={{ sidebarState, setSidebarState, user, setUser }}>
                <Container fluid className='h-100 overflow-hidden g-0 d-flex'>
                    <UserSideBar />
                    <div className="user-white-space">
                        space
                    </div>
                    <div className="user-content">
                        <Outlet />
                    </div>
                </Container>
            </UserContext.Provider>
        </div>
    )
}

export default UserLayout;