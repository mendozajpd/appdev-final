import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const AdminLayout = () => {
    return (
        <div>
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export default AdminLayout;