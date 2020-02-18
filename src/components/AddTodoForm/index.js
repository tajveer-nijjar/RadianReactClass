import React, { useState } from 'react';

const AddTodoForm = props => {
  const [title, setTitle] = useState('');

  const { addTodo } = props;

  const handleTextChange = e => {
    setTitle(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    addTodo(title);
  };

  return (
    <React.Fragment>
      <form>
        <input
          type='text'
          name='title'
          placeholder='Type here'
          onChange={handleTextChange}
        />
        <input type='submit' value='Add todo' onClick={handleClick} />
      </form>
    </React.Fragment>
  );
};

export default AddTodoForm;
