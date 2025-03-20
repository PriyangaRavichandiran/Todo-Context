import React, { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // ✅ Initialize todos from localStorage or default to empty array
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  // ✅ Save todos to localStorage whenever they change
  useEffect(() => {
    console.log("Saving todos:", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //  Function to Add a New To-Do
    const addTodo = (title) => {
      setTodos([...todos, { id: Date.now(), title }]);
    };
    const resetTodo = (title) => {
      setTodos([]);
    };
  
    //  Function to Delete a To-Do
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    return (
      <TodoContext.Provider value={{ todos, addTodo, deleteTodo,resetTodo }}>
        {children}
      </TodoContext.Provider>
    );
  };
  
  //  Custom Hook for easier access
  export const useTodos = () => useContext(TodoContext);
  
