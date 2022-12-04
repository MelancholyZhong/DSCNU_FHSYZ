import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import "./InfoPage.css";

const InfoPage = () => {
    const { userId } = useParams(); // 638c9c145adcff3c1489f504
    const [userInfo, setUserInfo] = useState({
        first_name: "Alan",
        last_name: "Turing",
        email: "test@gmail.com",
        phone: "333 4444 333",
        medical_history:
            "Default message Default message Default message Default message Default message Default message",
        message_content: "Empty",
    });
    const [additinalInfo, setAddtinalInfo] = useState("");
    const [show, setShow] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const simulateNetworkRequest = () => {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    };
    const handleClick = () => setLoading(true);

    const getUserInfo = async () => {
        try {
            const response = await fetch(`/api/info/${userId}`, {
                method: "GET",
                body: null,
                headers: { "Content-Type": "application/json" },
            });
            const responseData = await response.json();
            setUserInfo({ ...responseData.info });
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const sendMessage = async () => {
        try {
            const response = await fetch("/api/alert", {
                method: "POST",
                body: JSON.stringify({
                    ...userInfo,
                    message_content: additinalInfo,
                }),
                headers: { "Content-Type": "application/json" },
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                sendMessage();
                setLoading(false);
                setShow(true);
            });
        }
    }, [isLoading]);

    return (
        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        🥳 Succeed 🎉
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal_body">
                        You have sent this message to his/her families and
                        friends successfully!!!
                        <br />
                        Thank you for your help!!!
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col lg={1} md={1} xl={1}>
                    <div></div>
                </Col>
                <Col lg={5} md={5} xl={5} offset={1}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Basic Information</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{`Name: ${userInfo.first_name} ${userInfo.last_name}`}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Title>Emergency Contacts</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                {`Email: ${userInfo.email}`}
                            </ListGroup.Item>
                            <ListGroup.Item>{`Telephone: ${userInfo.phone}`}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Title>Medical History</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                {userInfo.medical_history}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

                <Col lg={5} md={5} xl={5} offset={1}>
                    <Container>
                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Additinal information you want to share"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Additinal Information"
                                style={{ height: "300px" }}
                                onChange={(e) =>
                                    setAddtinalInfo(e.target.value)
                                }
                            />
                        </FloatingLabel>
                        <div className="d-grid gap-2">
                            <Button
                                variant="success"
                                type="submit"
                                disabled={isLoading}
                                onClick={!isLoading ? handleClick : null}
                            >
                                {isLoading ? "Sending…" : "Send"}
                            </Button>
                        </div>
                    </Container>
                </Col>
            </Row>
        </>
    );
};

export default InfoPage;
