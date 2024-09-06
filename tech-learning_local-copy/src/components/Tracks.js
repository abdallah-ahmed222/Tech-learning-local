import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaLaptopCode, FaTabletAlt, FaDatabase } from "react-icons/fa";
import Head from "./Head";
export default function Tracks() {
  return (
    <div className="main-container my-4 pt-2">
      <Container className="text-white">
        <div className="hone-container py-5">
          <Head text="Tracks" className="fw-bold" />
          <Row xs={2} lg={3} className="g-4 pt-4">
            <Col>
              <Card className="track">
                <FaLaptopCode className="track-icon" />
                <Card.Body>
                  <Card.Title className="fw-bold">Frond-end</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="track">
                <FaDatabase className="track-icon" />
                <Card.Body>
                  <Card.Title className="fw-bold">Back-end</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="offset-3 offset-lg-0">
              <Card className="track">
                <FaTabletAlt className="track-icon" />
                <Card.Body>
                  <Card.Title className="fw-bold">Mobile-App</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
