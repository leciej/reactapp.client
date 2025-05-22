import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
export function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/Image/logo.png" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link to="/" className="d-block">Home</Link>
                            </Nav.Link>
                            <NavDropdown title="Liga" id="Liga">
                                <NavDropdown.Item>
                                    <Link to="/zawodnicy" className="d-block">Zawodnicy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/mecze" className="d-block">Mecze</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/kluby" className="d-block">Kluby</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Baza" id="Baza">
                                <NavDropdown.Item>
                                    <Link to="/zawodnik" className="d-block">Zawodnik</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/mecz" className="d-block">Mecz</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/klub" className="d-block">Klub</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Inne" id="Inne">
                                <NavDropdown.Item>
                                    <Link to="/zawodnik" className="d-block">Inne 1.1</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/mecz" className="d-block">Inne 1.2</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/klub" className="d-block">Inne 1.3</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Wyszukaj..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Wyszukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}