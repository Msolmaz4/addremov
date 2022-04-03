import React from 'react'

const Header = ({prod,setBasket,basket}) => {

    const bastItem = basket.find(item =>item.id === prod.id)

const handleAdd =()=>{


    const checkBasket = basket.find(item =>item.id === prod.id)
    if(checkBasket){
        checkBasket.amount +=1
        setBasket([...basket.filter(item =>item.id !==prod.id),checkBasket])
    }else{
        setBasket([...basket,{
            id:prod.id,
            amount:1
        }])
    }
}


const handleRemove =()=>{

    const currentBasket = basket.find(item =>item.id === prod.id)
    const sta =basket.filter(item =>item.id !==prod.id)
    currentBasket.amount -= 1
    if(currentBasket === 0){
        setBasket([...sta])
    }else{
        setBasket([...sta,currentBasket])
    }

     



}



  return (
    <div>

<h2>{prod.name}</h2>
<div>{prod.price}</div>
<div>
    <button onClick={handleAdd}>arti</button>
    <span>{bastItem && bastItem.amount || 0}</span>
    <button disabled={!bastItem} onClick={handleRemove}>eksi</button>
</div>

    

    </div>
  )
}

export default Header