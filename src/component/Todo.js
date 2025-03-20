
import { Card, Col, Container, Row } from "react-bootstrap";

import InputForm from "./inputForm";
import List from "./List";

function Todo() {

  return (
    <Container fluid> 
      <Row>
        <Col md={4}>
          <Card>
            <Card.Title className="text-center mt-3">Todo List</Card.Title>
            <Card.Body>
              <InputForm />
              <List />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Todo;
