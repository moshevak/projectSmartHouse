import React from 'react'
import { useState } from 'react';
import './room.css'
import AddProduct from './AddProduct';



export default function Room(props) {


const[flag,setFlag]=useState(false);
const show = ()=>{
  if(flag == false){
    return <div id='device'>
      <AddProduct  change={change} index={props.index} addProduct={props.addProduct} />
    </div>
  }else{
    return <button onClick={change}>+</button>
  }
}
const change = ()=>{
  setFlag(!flag)
}

 



  return (

    <div>
      <div id='always'>
        
    
      <h1 className='detail'>{`room name: ${props.name}`}</h1>
      
      <h1 className='detail'> {`type: ${props.type}`}</h1>
      
      {show()}

      {props.products.map((val,index)=>{
        let condition = val.condition ? 'green' : 'red'

        return <button onClick={()=>{props.changeCondition(props.index,index)}} style={{backgroundColor:condition}} >{val.type}</button>
      })}

      
    
     
     </div>
      
  
   

    </div>
  )
}
