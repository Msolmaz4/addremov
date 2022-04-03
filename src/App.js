import React, { useEffect, useState } from 'react'
import data from './data'
import './App.css';
import Header from './components/Header';

function App() {

const [basket ,setBasket] = useState([])
const [total,setTotal] = useState()

useEffect(()=>{
setTotal(
  basket.reduce((acc,item) =>{
    return acc+(item.amount*productItem.find(xr=>xr.id === item.id).price)
  },0)
)

},[basket])


const {productItem} =data

  return (
    <div className="App">
   {
     productItem.map((prod ) =>(
       <Header
       key={prod.id}
       basket ={basket}
       setBasket={setBasket}
       prod={prod}
       
       />
     ))
   }
   <div>{total}</div>
    </div>
  );
}

export default App;
