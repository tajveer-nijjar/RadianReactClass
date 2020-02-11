import React, { useState } from 'react';

import Todos from './components/Todos';

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

  return (
    <React.Fragment>
      <Todos todos={todos} />
    </React.Fragment>
  );
}

export default App;
