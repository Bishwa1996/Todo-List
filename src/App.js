import React, { useState } from 'react';
import ToDoList from "./ToDoList";

const App = () => {

    const[inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent =(event) =>{
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
        return [...oldItems, inputList];
        });
        setInputList("");
    };
    const deleteItems = () => {
        console.log("deleted");
    }

  return(
      <>
      <div className= "main_div">
          <div className= "center_div">
           <br/>
           <h1>ToDo List</h1>
           <br/>
           <input type="text" 
           placeholder= "Add a item" 
           value={inputList}
           onChange={itemEvent} />
           <button onClick={listOfItems}> + </button>
           <ol>
               {/*<li>{inputList}</li>*/}
               {items.map( (itemval, index) =>{ 
               return <ToDoList 
               key= {index} 
               id={index}
               text={itemval}
               onSelect = {deleteItems}
               />
               })};
           </ol>
          </div>
      </div>
      </>
  )
  
}

export default App;