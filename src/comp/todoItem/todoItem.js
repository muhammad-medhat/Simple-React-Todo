import React, { Component } from 'react';
import './todoItem.css'
const TodoItem = (props) => {
    //console.log(props);
    const {items, deleteItem} = props
    let itemsList = ''
    if (items.length !== 0) {    
        itemsList = items.map(i =>{
            return(
                <li key={i.id}>
                    <span>{i.id}</span>
                    <span>{i.name}</span>
                    <span onClick={()=>deleteItem(i.id)}>&#x2717;    &cross;</span>
                </li>                
            )
        })
    } else{
        itemsList = <h3>No Items</h3>
    }

    return ( 
        <>
        <h2>Todo List</h2>
        <div className='items-list'>
            {itemsList}
        </div>
        </> 
    );
}
 

export default TodoItem;