import React from 'react';

const SingleTodo = props => {
  const { todo } = props;

  const getStyle = () => {
    const style = {
      backgroundColor: '#e3e3e3',
      padding: 10,
      borderBottom: '1px #ccc solid'
    };

    if (todo.done === true) {
      style.textDecoration = 'line-through';
    } else {
      style.textDecoration = 'none';
    }

    return style;
  };

  return (
    <div style={getStyle()}>
      <p>{todo.title}</p>
    </div>
  );
};

export default SingleTodo;
