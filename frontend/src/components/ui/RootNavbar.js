import { Container, Row, Button, Image } from "react-bootstrap";
import logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";

function RootNavbar({ showButton }) {
    const navigate = useNavigate();

    return (
        <Row className="w-100 navbar" >
            <div className="justify-content-between d-flex">
                <div className="d-flex">
                    <div className="d-flex clickable" onClick={() => navigate('/')}>
                        <Image src={logo} alt="logo" className="mx-2" style={{ height: '3rem', width: '3rem' }} />
                    </div>
                    <div className="display-6 text-white text-bold clickable" onClick={() => navigate('/landing')}>
                        PetMatch
                    </div>
                </div>
                {showButton ?
                    <div className="d-flex">
                        <Button onClick={() => navigate('login')} variant='light' className='text-bold text-green' style={{ border: '1px solid #a7a7a7', borderRadius: '2rem', width: '7rem' }}>Log in</Button>
                    </div>
                    : null}
            </div>
        </Row>
    );
}

export default RootNavbar;