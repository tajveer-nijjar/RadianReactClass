import React from 'react';

import SingleTodo from '../SingleTodo';

const TodosContainer = props => {
  const { todos, handleCheckChange } = props;

  return (
    <div>
      {todos &&
        todos.map(todo => {
          return (
            <SingleTodo
              key={todo.id}
              todo={todo}
              handleCheckChange={handleCheckChange}
            />
          );
          // return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
};

export default TodosContainer;
