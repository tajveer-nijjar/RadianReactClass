import React from 'react';

import SingleTodo from '../SingleTodo';

const TodosContainer = props => {
  const { todos } = props;

  return (
    <div>
      {todos &&
        todos.map(todo => {
          return <SingleTodo key={todo.id} todo={todo} />;
          // return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
};

export default TodosContainer;
