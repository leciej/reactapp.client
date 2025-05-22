import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export const Zawodnik = () => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                        <Button variant="primary" className="me-2">Dodaj</Button>
                        <Button variant="info" className="me-2">Wroc</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Row className="mt-3">
                        <Tabs defaultActiveKey="danePodstawowe" className="mb-3">
                            <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Imie</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Nazwisko</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Data urodzenia</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Pozycja</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Wybierz</option>
                                                <option value="1">Bramkarz</option>
                                                <option value="2">Obroñca</option>
                                                <option value="3">Pomocnik</option>
                                                <option value="4">Napastnik</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Klub</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="Dane adresowe" title="Dane adresowe">
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Ulica</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Nr domu</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Nr lokalu</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Kod</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Miejscowosc</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Poczta</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Gmina/Powiat</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Wojewodztwo</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Wybierz</option>
                                                <option value="1">Pomorskie</option>
                                                <option value="2">Kujawsko - Pomorskie</option>
                                                <option value="3">Zachodniopomorskie</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Kraj</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="osiagniecia" title="Osiagniecia">
                                <Row className="mb-3">
                                    <Col className="col-4">
                                        <Form.Group>
                                            <Form.Label>Obecny klub</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-4">
                                        <Form.Group>
                                            <Form.Label>Bramki</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-4">
                                        <Form.Group>
                                            <Form.Label>Kartki</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Wystepy</Form.Label>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Sezon</th>
                                                        <th>Mecz</th>
                                                        <th>Minuty</th>
                                                        <th>Bramka</th>
                                                        <th>Kartka</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>MKS</td>
                                                        <td>Piast</td>
                                                        <td>2022/2023</td>
                                                        <td>125000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>MKS</td>
                                                        <td>Piast</td>
                                                        <td>2022/2023</td>
                                                        <td>125000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>MKS</td>
                                                        <td>Piast</td>
                                                        <td>2022/2023</td>
                                                        <td>125000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>MKS</td>
                                                        <td>Piast</td>
                                                        <td>2022/2023</td>
                                                        <td>125000</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Transfery</Form.Label>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>L.p.</th>
                                                        <th>Odszedl</th>
                                                        <th>Przyszedl</th>
                                                        <th>Sezon</th>
                                                        <th>Odstepne</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>MKS</td>
                                                        <td>Piast</td>
                                                        <td>2022/2023</td>
                                                        <td>125000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>MKS</td>
                                                        <td>Piast</td>
                                                        <td>2022/2023</td>
                                                        <td>125000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>MKS</td>
                                                        <td>Piast</td>
                                                        <td>2022/2023</td>
                                                        <td>125000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>MKS</td>
                                                        <td>Piast</td>
                                                        <td>2022/2023</td>
                                                        <td>125000</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Row>
                </Row>
            </Form>
        </Container >
    )
}