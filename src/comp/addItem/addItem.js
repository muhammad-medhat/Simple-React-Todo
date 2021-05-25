import React, { Component } from 'react';
import './addItem.css'
class AddItem extends Component {
    state = {id: '', 
        name: '', 
        age: ''
    }
    handleChange = (e) =>{
        // console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitForm = (e)=>{
        e.preventDefault()
        this.props.insert(this.state)
        this.setState({name:'', age:''})
    }
    render() { 
        return ( 
        <>
            <h2>Add Item</h2>
            <form onSubmit={this.submitForm}>
                <input type='text' id='name' name='name' onChange={this.handleChange} value={this.state.name}/>
                <input type='number' id='age' name='age' onChange={this.handleChange} value={this.state.age}/>
                <button>Add</button>
            </form>
        </> );
    }
}
 
export default AddItem;