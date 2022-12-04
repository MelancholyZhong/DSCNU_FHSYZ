import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Card, Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./GenerateQRcodePage.css";

const GenerateQRcodePage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [medicalHistory, setMedicalHistory] = useState("");
    const [messageContent, setMessageContent] = useState("");
    const [QRCode, setQRCode] = useState(
        "https://raw.githubusercontent.com/huwang12138/markdown-picture/main/QR.gif"
    );
    const [isLoading, setLoading] = useState(false);

    const submitHandler = () => {
        const userInfo = {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            message_content: messageContent,
            medical_history: medicalHistory,
        };

        const saveInfo = async () => {
            try {
                const response = await fetch("/api/info", {
                    method: "POST",
                    body: JSON.stringify(userInfo),
                    headers: { "Content-Type": "application/json" },
                });
                const responseData = await response.json();
                console.log(responseData);
                if (responseData.QRCode) {
                    setQRCode(responseData.QRCode);
                }
            } catch (error) {
                console.log(error.message);
                alert("Something wrong, please try later");
            }
        };
        saveInfo();
    };

    const simulateNetworkRequest = () => {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    };
    const handleClick = () => setLoading(true);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                submitHandler();
                setLoading(false);
            });
        }
    }, [isLoading]);

    return (
        <Container>
            <Row>
                <Col lg={5} md={5} xl={5} offset={1}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="First name"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Alan"
                            onInput={(e) => setFirstName(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Last name"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Turing"
                            onInput={(e) => setLastName(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Emergency Contact's Email Address"
                        className="mb-3"
                    >
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            onInput={(e) => setEmail(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Emergency Contact's Phone Number"
                        className="mb-3"
                    >
                        <Form.Control
                            type="tel"
                            placeholder="333 4444 333"
                            onInput={(e) => setPhone(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="SOS Message Content"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            onInput={(e) => setMessageContent(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Medical History"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Some crutical Medical History"
                            onInput={(e) => setMedicalHistory(e.target.value)}
                        />
                    </FloatingLabel>
                    <div className="d-grid gap-2">
                        <Button
                            variant="success"
                            type="submit"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                        >
                            {isLoading ? "Generating…" : "Generate QR code"}
                        </Button>
                    </div>
                </Col>
                <Col lg={1} md={1} xl={1} offset={1}>
                    <div></div>
                </Col>
                <Col lg={5} md={5} xl={5} offset={1}>
                    <Container>
                        <Card>
                            <div>
                                <img
                                    src={QRCode}
                                    alt="default QR code"
                                    className="center"
                                />
                            </div>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default GenerateQRcodePage;
