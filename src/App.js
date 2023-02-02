import './App.css';
import TodoTable from './components/TodoTable';
import React, {useState} from 'react';
import NewTodoForm from './components/NewTodoForm';

function App() {
 const [ todos , setTodos ] = useState([
    {rowNumber: 1,rowDescription: 'Feed me', rowAssigned: 'EL MEHFI'},
    {rowNumber: 2,rowDescription: 'Playing', rowAssigned: 'Oussama'},
    {rowNumber: 3,rowDescription: 'Coding', rowAssigned: 'Mohsine'},
    {rowNumber: 4,rowDescription: 'Soccer', rowAssigned: 'Mosine'}
  ])
  const addTodo = (description,assigned) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber : todos.length + 1,
        rowDescription : description,
        rowAssigned : assigned
      };
      setTodos(todos => [...todos, newTodo])
      console.log(todos);
    }
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos = {todos}/>
          <button className='btn btn-danger' onClick={addTodo}>
            Add new Todo
          </button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
