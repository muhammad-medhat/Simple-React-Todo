import React, { Component } from 'react';
import './App.css';
import TodoItem from './comp/todoItem/todoItem';
import AddItem from './comp/addItem/addItem';
class App extends Component {
  state = { 
      todos: [
          {id: 1, name: 'web design', age: 35},
          {id: 2, name: 'web design', age: 35},
          {id: 3, name: 'web design', age: 35},
          {id: 4, name: 'web design', age: 35},
          {id: 5, name: 'web design', age: 35},
          {id: 6, name: 'web design', age: 35},
          {id: 7, name: 'web design', age: 35}
      ]
  }
  deleteItem = id =>{
    const newTodos = this.state.todos.filter(t=>t.id!==id)
    this.setState({todos: newTodos})
  }
  addItem = t=>{
    console.log('Adding ...',t);
    const todos = this.state.todos
    todos.push(t)
    this.setState({todos})
  }
  render() { 
    return (  
      <div className="App container">
        <h1 className='text-center'>Todo Aapp</h1>
        <TodoItem 
          items={this.state.todos} 
          deleteItem={this.deleteItem}/>
        <hr />
        <AddItem insert={this.addItem} />
    </div>

    );
  }
}
 
export default App;
