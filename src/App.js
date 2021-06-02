import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import TodoItem from './comp/todoItem/todoItem';
import AddItem from './comp/addItem/addItem';

import axios from 'axios';
import CommonScripts from './comp/commonScripts';
class App extends Component {
  state = { 
      todos: []
  }
  APIURL='http://127.0.0.1:5000/todos'
  async componentDidMount(){
      const {data}  = await axios.get(this.APIURL)
      //console.log('get request', data);
      this.setState({todos: data})
  }

  deleteItem = id =>{
    const newTodos = this.state.todos.filter(t=>t.id!==id)
    this.setState({todos: newTodos})
    this.deleteB(id)
  }
  
  deleteB = async (tid) => {
    const oldTodos = [...this.state.todos];

    //State
    //Clone
    //Edit 
    const todos = this.state.todos.filter((s) => s.id !== tid);
    //Set state
    this.setState({ todos });

    try {
      //Call B
        await axios.delete( `${this.APIURL}/${tid}` );
    } catch (ex) {
        alert("Cant Delete");
        this.setState({ todos: oldTodos });
    }
  };

  addItem = t=>{
    console.log('Adding ...',t);
    const todos = this.state.todos
    todos.push(t)
    this.setState({todos})
    this.insertB(t)
  }

  insertB = async(t) => {
    const oldTodos = [...this.state.todos];
    console.log('Inserting...', t);

    //State
    //Clone
    //Edit 
    this.state.todos.push(t) 
    const todos = this.state.todos       
    console.log('state todos', this.state.todos);
    console.log('old', oldTodos)
    console.log('after pushing', t);
    console.log('new', todos)


    //Set state
    this.setState({ todos: todos });

    try {
        //Call B
        const obj = t
        await axios.post( `${this.APIURL}`, obj );
    } catch (ex) {
        alert("Cant Insert")
        this.setState({ todos: oldTodos })
    } 
    
}

  render() { 
    return (  
      <>
      <div className="App container">
        <h1 className='text-center'>Fullstack Todo Aapp</h1>
        <TodoItem 
          items={this.state.todos} 
          deleteItem={this.deleteItem}/>
        <hr />
        <AddItem insert={this.addItem} />
    </div>
    <CommonScripts />
    </>

    );
  }
}
 
export default App;
