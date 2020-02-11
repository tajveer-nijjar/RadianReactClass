import React from 'react';

const Todos = props => {
  const { todos } = props;

  return (
    <div>
      {todos.map(todo => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
};

export default Todos;
