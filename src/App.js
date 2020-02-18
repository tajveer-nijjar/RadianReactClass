import React, { useState } from 'react';

import TodosContainer from './components/TodosContainer';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Attend restro meeting',
      done: false
    },
    {
      id: 2,
      title: 'Attend the amazing React class',
      done: false
    },
    {
      id: 3,
      title: 'Feed yourself',
      done: false
    }
  ]);

  const handleCheckChange = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }

        return todo;
      })
    );
  };

  const handleDeleteTodoClick = id => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const addTodo = title => {
    const newTodo = {
      id: 4,
      title: title,
      done: false
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <React.Fragment>
      <AddTodoForm addTodo={addTodo} />
      <TodosContainer
        todos={todos}
        handleCheckChange={handleCheckChange}
        handleDeleteTodoClick={handleDeleteTodoClick}
      />
    </React.Fragment>
  );
}

export default App;
