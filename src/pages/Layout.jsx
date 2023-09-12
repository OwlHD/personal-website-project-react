import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
                <Container>
                <Navbar.Brand as={Link} to="/">Miguel Flores</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
}