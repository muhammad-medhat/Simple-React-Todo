import React, { Component } from 'react';
import './todoItem.css'
const TodoItem = (props) => {
    //console.log(props);
    const {items, deleteItem} = props
    let itemsList = ''
    if (items.length !== 0) {    
        itemsList = items.map(i =>{
            return(
                <li key={i.id} className='list-group-item'>
                    <span>{i.id}</span>
                    <span>{i.name}</span>
                    <span>{i.content}</span>
                    <span>
                        <p className="badge btn-primary badge-pill">{i.prog}</p>
                    </span>
        
                    <span>
                        <input className="form-check-input" 
                            type="checkbox" 
                            value={i.done} 
                            id="flexCheckChecked" />

                    </span>
                    <span  className='text-danger' onClick={()=>deleteItem(i.id)}>
                        <p style={{cursor: 'pointer'}}>
                            &#x2717;  
                        </p> 
                    </span>
                    {/* <div className="prog">
                        
                    </div> */}
                </li>                
            )
        })
    } else{
        itemsList = <h3>No Items</h3>
    }

    return ( 
        <>
        <h2>Todo List</h2>
        <div className='list-group list-group-striped items-list'>
            {itemsList}
        </div>
        </> 
    );
}
 

export default TodoItem;