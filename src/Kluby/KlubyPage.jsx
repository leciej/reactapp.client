import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Kluby = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="filtrowanie">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Szukaj po nazwisku</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-1">
                                    <Form.Group>
                                        <Form.Label>P³aca brutto od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-1">
                                    <Form.Group>
                                        <Form.Label>P³aca brutto do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Stanowisko</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Dyrektor</option>
                                            <option value="2">Kierownik</option>
                                            <option value="3">Sprzedawca</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Stanowisko</th>
                        <th>P³aca brutto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Adam</td>
                        <td>Kot</td>
                        <td>Sprzedawca</td>
                        <td>4000 z³</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Micha³</td>
                        <td>Pies</td>
                        <td>Dyrektor</td>
                        <td>8000 z³</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Robert</td>
                        <td>Beger</td>
                        <td>Kierowni</td>
                        <td>6000 z³</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Damian</td>
                        <td>Borsuk</td>
                        <td>Sprzedawca</td>
                        <td>4000 z³</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}