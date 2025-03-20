import React, { useRef } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useTodos } from "./TodoContext";
function InputForm(){
    const {  addTodo,  resetTodo } = useTodos(); // ✅ Get context
    const inputRef = useRef("");
  
    const handleAddTodo = () => {
      const inputValue = inputRef.current.value.trim();
      if (inputValue !== "") {
        addTodo(inputValue);
        inputRef.current.value = ""; // Clear input
      }
    };
    return (
        <Form>
            <FormGroup>
                <Form.Control type="text" ref={inputRef} placeholder="Enter a task" />
            </FormGroup>
            <br />
            <div className="d-flex justify-content-start align-items-center">
                <Button variant="primary" onClick={handleAddTodo} className="me-2">Add</Button>
                <Button variant="danger" onClick={resetTodo} >Reset</Button>
            </div>
            <br />
        </Form>
    )
}export default InputForm