import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './addroom.css'









export default function Addroom(props) {
  const nav = useNavigate();

  const [name,setName]=useState('');
  const [type,setType]=useState('');
  const [color,setColor]=useState('');

  
  const checkWords = ()=>{
    if(name.length <= 0 || type === ('') ){
      alert('ERROR')
      props.AddRoom()
      return false;
    }
  }
  return (


    <div id='add'>
     
  
      <select id='kindOfRoom' onChange={(e)=>{setType(e.target.value)}} >
      <option>Choose room</option>
       <option value="Bedroom">Bedroom</option>
       <option value="Bathroom">Bathroom</option>
       <option value="Kitchen">Kitchen</option>
      </select>
      <br/>
      <input onChange={(e)=>{setName(e.target.value)}} id='nameRoom' type="text" maxLength='5' placeholder="name of the room"/>
      <br/>
      <input onChange={(e)=>{setColor(e.target.value)}} id='colorRoom'  type="color" placeholder="color of the room"/>
      <br/>
      <button onClick={()=>{ nav('/');checkWords();props.addRoom(name,type,color);}}>Create</button>


    </div>

  )
}
