import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserSideBar from "../ui/UserSidebar";

// Prime React
import { Sidebar } from 'primereact/sidebar';

// Context
import UserContext from "../../context/UserContext";

const UserLayout = () => {

    const [sidebarState, setSidebarState] = useState('')

    return (
        <div className="d-flex vh-100">
            <UserContext.Provider value={{ sidebarState, setSidebarState }}>
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