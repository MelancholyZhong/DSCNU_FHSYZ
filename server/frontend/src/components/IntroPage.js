import React from "react";
import "./IntroPage.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h1 className="title">Welcome!</h1>
            <Card
                style={{
                    width: "70%",
                    // marginTop:"10%",
                    left: "15%",
                    right: "15%",
                    backgroundColor: "#fbda41",
                }}
            >
                <Card.Body>
                    <Card.Title
                        style={{
                            fontFamily: "Anton, sans-serif",
                            fontSize: "35px",
                        }}
                    >
                        Sometimes, some information could save your life!
                        <br />
                    </Card.Title>
                    <Card.Text
                        style={{
                            fontFamily: "Signika Negative",
                            fontSize: "28px",
                        }}
                    >
                        Generate your presonal QR code within 2 minutes and{" "}
                        <br />
                        send SOS message to your emergency contacts <br />
                        whenever scaning the QR code, <br />
                        even a stranger who knows nothing about you could still
                        help you!
                    </Card.Text>
                </Card.Body>
            </Card>
            <button className="start" onClick={() => navigate("/inputInfo")}>Start</button>
            <img
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/shared/illustrations/teamwork.png"
                alt="welcome"
                className="notionimg"
            />
        </div>
    );
};

export default IntroPage;
