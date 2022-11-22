import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import {useState} from 'react';
import Addroom from './Components/Addroom.jsx';
import Rooms from './Components/Rooms.jsx';
import Room from './Components/Room.jsx'





function App() {
 const [rooms,setRooms] =useState([]);


 const addRoom = (name,type,color)=>{
setRooms([...rooms,{name:name,type:type,color:color,products:[]}])
 }
 
 const addProduct =(index,typeOfProduct)=>{
let temp = {condition:false,type:typeOfProduct}
if(rooms[index].products.length === 5){
  alert('the room can countain only 5 products')
}else if(typeOfProduct === 'stereo system' && rooms[index].products.filter(val=> val.type === 'stereo system').length>0){
  alert('each room can have 1 stereo system only')
}else if(typeOfProduct === 'water heater' && rooms[index].type !== 'Bathroom'){
  alert('only bathrooms can have heater')
}else{
  rooms[index].products.push(temp)
  setRooms([...rooms]);
}

 }

 const changeCondition =(indexOfRoom,indexOfProduct)=>{
rooms[indexOfRoom].products[indexOfProduct].condition = !rooms[indexOfRoom].products[indexOfProduct].condition
setRooms([...rooms])
 }
 



  
  


  return (
    <div className="App">
      <div id='div-Main'>
      <h1 id='title'>Smart house</h1>
      
      <BrowserRouter>
      
      <Routes>
       
      <Route path='/' element={<Rooms rooms={rooms}/>}/>
      <Route path='/addroom' element={<Addroom addRoom={addRoom}/>}/>
      {rooms.map((val,index)=>{ 
        return <Route path={`room${val.name}`} element={<Room products={val.products} changeCondition={changeCondition} addProduct={addProduct} index={index} name={val.name} type={val.type} />}/>
      })};
     
     
      
      
    
      

      </Routes>
      
      
      
      
     
      </BrowserRouter>
      </div>
    </div>
  );

}
export default App;
