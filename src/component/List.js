import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useTodos } from "./TodoContext";
function List() {
    const { todos,  deleteTodo,  } = useTodos(); // ✅ Get context
    return (
        <ListGroup>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
                        {todo.title}
                        <Button variant="danger" onClick={() => deleteTodo(todo.id)} size="sm">Delete</Button>
                    </ListGroup.Item>
                ))
            ) : (
                <ListGroup.Item className="text-muted">No tasks yet</ListGroup.Item>
            )}
        </ListGroup>
    )
}export default List