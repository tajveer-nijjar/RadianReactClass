import React, { useState } from 'react';

import TodosContainer from './components/TodosContainer';

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
    console.log(id);
  };

  return (
    <React.Fragment>
      <TodosContainer todos={todos} handleCheckChange={handleCheckChange} />
    </React.Fragment>
  );
}

export default App;
