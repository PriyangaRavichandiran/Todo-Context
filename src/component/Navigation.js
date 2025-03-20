import React from "react";
import { Col, Navbar, Row } from "react-bootstrap";
function Navigation() {
    return (
        <>
        <Row>
            <Col>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand><h1>TODO</h1></Navbar.Brand>
                </Navbar>
            </Col>
        </Row>
        <br/>
        </>
    )
}export default Navigation