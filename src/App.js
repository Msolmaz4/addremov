import React, { useEffect, useState } from 'react'
import data from './data'
import './App.css';
import Header from './components/Header';

function App() {

const [basket ,setBasket] = useState([])

useEffect(()=>{
console.log(basket)
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
       prod={prod} />
     ))
   }
    </div>
  );
}

export default App;
