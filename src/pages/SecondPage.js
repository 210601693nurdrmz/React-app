import React, { useState } from 'react'; 
import { Form, Button } from 'react-bootstrap'; 
import './SecondPage.css';

const SecondPage = () => {
  const [todos, setTodos] = useState([]); // useState for todos

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.todoInput.value;
    setTodos([...todos, newTodo]);
    event.target.reset();
  };

  return (
    <div className="second-page">
      <div className="page-container">
        <div className="content-container">
          <Form onSubmit={addTodo}>
            <Form.Group>
              <Form.Control type="text" name="todoInput" placeholder="Add ToDo..." /> 
            </Form.Group>
            <Button variant="primary" type="submit">+</Button>
          </Form>
          {todos.map((todo, index) => (
            <div key={index} className="todo-item-container">
              <div className="todo-item-text">{todo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
