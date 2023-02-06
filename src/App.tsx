import './App.css';
import {TodoTable} from './components/TodoTable';
import React, {useState} from 'react';
import {NewTodoForm} from './components/NewTodoForm';

export const App = () => {

const [showAddTodoForm, setShowTodoForm] = useState(false); 

 const [ todos , setTodos ] = useState([
    {rowNumber: 1,rowDescription: 'Feed me', rowAssigned: 'EL MEHFI'},
    {rowNumber: 2,rowDescription: 'Playing', rowAssigned: 'Oussama'},
    {rowNumber: 3,rowDescription: 'Coding', rowAssigned: 'Mohsine'},
    {rowNumber: 4,rowDescription: 'Soccer', rowAssigned: 'Mosine'}
  ])
  const addTodo = (description: string,assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else{
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber : rowNumber,
        rowDescription : description,
        rowAssigned : assigned
      };
      setTodos(todos => [...todos, newTodo])
      console.log(todos);
  }

  const deleteTodo = (deleteTodoRow : number) => {
    let filtered = todos.filter( function (value){
      return value.rowNumber !== deleteTodoRow;
    });
    setTodos(filtered);
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos = {todos} deleteTodo={deleteTodo}/>
          <button 
          onClick={() => setShowTodoForm(!showAddTodoForm) }
          type="button" 
          className="btn btn-success mt-3"                
          >
          {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm &&
          <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}


