import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const UserLayout = () => {
    return (
        <div>
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export default UserLayout;