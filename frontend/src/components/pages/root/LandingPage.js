import { Container, Button } from "react-bootstrap";
import RootNavbar from "../../ui/RootNavbar";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <Container fluid className="vh-100 g-0">
            <RootNavbar showButton />
            <div className="h-100 text-white justify-content-center d-flex align-items-center">
                <div className="d-flex justify-content-center flex-column">
                    <div className="display-1 my-4 roboto text-bold">
                        Adopt a pet today!
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button onClick={() => navigate('register')}variant='outline-light' className='text-bold' style={{ borderRadius: '5rem' }}>
                            <div className="mx-3 display-7">
                                Create Account
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default LandingPage;