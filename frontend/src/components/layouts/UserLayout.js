import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserSideBar from "../ui/UserSidebar";

const UserLayout = () => {
    return (
        <div className="d-flex vh-100">
            <Container fluid className='h-100 overflow-hidden g-0 d-flex'>
                <UserSideBar />
                <div className="user-content">
                    <Outlet />
                </div>
            </Container>
        </div>
    )
}

export default UserLayout;