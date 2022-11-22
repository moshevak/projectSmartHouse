import React,{useState} from 'react'
import './room.css'


export default function AddProduct(props) {

const[product,setProduct]=useState('');



  return (
    <div id='products'>

    <select onChange={(e)=>{setProduct(e.target.value)}}>
    <option >pick product</option>
      <option value='stereo system'>stereo system</option>
      <option value='water heater'>water heater</option>
      <option value='air conditioner'>air conditioner</option>
      <option value='lamp'>lamp</option>
    </select>
    <br/>
   
    <button id='addTo' onClick={()=>{props.addProduct(props.index,product);props.change();}}>add product</button>
    
    </div>
  )

}