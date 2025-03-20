import React from "react";
import { TodoProvider } from "./component/TodoContext";
import Todo from "./component/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,  } from "react-bootstrap";
import Navigation from "./component/Navigation";


function App() {
  return (
    
    <TodoProvider>
      <Container fluid>
      <Navigation/>
      <Todo />
      </Container>
    </TodoProvider>
  );
}export default App;