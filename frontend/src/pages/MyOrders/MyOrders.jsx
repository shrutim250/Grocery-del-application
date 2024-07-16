import React, { useContext, useEffect, useState } from 'react'
import "./MyOrders.css"
import { StoreContext } from '../../context/storeContext'
import axios from 'axios';
import { assets } from '../../assets/assets';
const MyOrders = () => {

    const {url,token}=useContext(StoreContext);
    const[data,setData]=useState([]);

    const fetchOrders=async ()=>{
    const response= await axios.post(url+"/api/order/useorders",{},{headers:{token}})
    setData(response.data.data)
    }
useEffect(()=>{
    if (token) {
        fetchOrders();
    }
},[token])

  return (
    <div className='my-orders'>
    <h2>MyOrders</h2>
    <div className='container'>
    {data.map((order,index)=>{
return(
    <div  key={index} className='my-orders-order'>
        <img src={assets.parcel_icon} alt=''/>
        <p>{order.items.map((item,index)=>{
   if(index===order.items.length-1){
    return( item.name+ "X" +item.quantity)
   }
   else{
    return item.name+"X"+item.quantity+","
   }
        })}</p>
        <p>&{order.amount}.00</p>
        <p>items:{order.items.length}</p>
        <p><span>&#X25cf</span><b>{order.status}</b></p>
        <button>Track Order</button>
    </div>
)
    })}
    </div>
    </div>
  )
}

export default MyOrders