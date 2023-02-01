import './App.css';
import TodoRowItem from './components/TodoRowItem';
import TodoTable from './components/TodoTable';

function App() {
  const todos = [
    {rowNumber: 1,rowDescription: 'Feed me', rowAssigned: 'Mohsine'},
    {rowNumber: 2,rowDescription: 'Playing', rowAssigned: 'Oussama'},
    {rowNumber: 3,rowDescription: 'Coding', rowAssigned: 'Mohsine'},
    {rowNumber: 4,rowDescription: 'Soccer', rowAssigned: 'Mosine'}
  ]
  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber : todos.length + 1,
        rowDescription : 'New Todo',
        rowAssigned : 'User Three'
      };
      todos.push(newTodo);
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
        </div>
      </div>
    </div>
  );
}

export default App;
