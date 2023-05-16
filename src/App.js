import React, { useState } from 'react';
import Returnlist from './Returnlist';
import ToDoLists from './ToDoLists';

const App=()=>{
    
        const [name,newname]=useState();
        const[item,setitem]=useState([]);//array state
        const inputEvent=(event)=>{
            newname(event.target.value);
        }
        const listofitem=()=>{
            setitem((olditem)=>{
                return[...olditem,name];
            })
            newname("");
        }
        const deleteitem=(id)=>{
            console.log("deleted");
            setitem((olditem)=>{
                return olditem.filter((arrEle,index) =>{
                    return index!== id;
                })
            })
        };
        return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1> ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add an item" 
                value={name}
                onChange={inputEvent}/>
                <button onClick={listofitem}>+</button>

                <ol>
                 {/*<li>{name}</li>*/}
                 {item.map((itemval,index)=>{ 
                   return <ToDoLists
                   key={index}
                   id={index}
                    text={itemval}
                    onSelect={deleteitem}
                    />;
                 } )}

                </ol>
            </div>
        </div>
        </>
    )
};

export default App;