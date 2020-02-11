import React, { useState } from 'react';

import TodosContainer from './components/TodosContainer';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Attend restro meeting',
      done: true
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

  return (
    <React.Fragment>
      <TodosContainer todos={todos} />
    </React.Fragment>
  );
}

export default App;
