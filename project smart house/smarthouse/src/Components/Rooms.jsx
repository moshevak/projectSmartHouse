import React from 'react'
import { Link } from 'react-router-dom'
import Addroom from './Addroom'
import './rooms.css'




export default function Rooms(props) {


  return (

    <div>
      <div id='div-rooms'>
{props.rooms.map((val)=>{
  return <Link to={`room${val.name}`}><button id='enterRoom' style={{backgroundColor:val.color}}>{val.name}</button></Link>
})}
</div>


  
<Link to={'/addroom'}><button id='addButton'>+</button></Link>




    </div>

  )
}
