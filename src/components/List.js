import React from 'react';   
import ReactDOM from 'react-dom';   
  
function List(){
const list = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];     
    return  <div>
            <ul>
            {list.map( (person,index) =><li key={index}>{person}</li>)}
            </ul>   
            </div>
}

export default List;