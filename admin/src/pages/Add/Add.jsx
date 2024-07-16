import React  from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {
   
    const[image,setImage]=useState(false);
    const[data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Fruits"
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler=async(event)=>{
      event.preventDefault()// to stop the reloading of the page
      const formData = new FormData();
      formData.append("name",data.name)
      formData.append("description",data.description)
      formData.append("price",Number(data.price))
      formData.append("category",data.category)
      formData.append("image",image)
      const response= await axios.post(`${url}/api/food/add`,formData)
      if (response.data.success){
        setData({ 
            name:"",
            description:"",
            price:"",
            category:" Fruits"
                })
          setImage(false)
          toast.success(response.data.message) // for notification
             }
      else{
       toast.error(response.data.message)
      }

    }

  return (
    <div className='add'>
    <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
            <p>upload Image</p>
            <label htmlFor='image'>
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])}  type='file' id='image' hidden required/>
        </div>
        <div className='add-product-name flex-col'>
            <p> product Name</p>
            <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder=' Type here'/>
        </div>
        <div className='add-product-description flex-col'>
            <p> product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content Here' required></textarea>
        </div>
        <div className='add-category-price'>
        <div className='add-category flex-col'>
            <p>product category</p>
            <select onChange={onChangeHandler} name='category' value={data.category}>
                <option value="Fruits">Fruits</option>
                <option value="Dairy">Dairy</option>
                <option value="Spice">Spice</option>
                <option value="Vegatables">Vegatables</option>
                <option value="Frozen Food">Frozen Food</option>
                <option value="Bevarages">Bevarages</option>
                <option value="Oils">Oils</option>
                <option value="Condiments">Condiments</option>
            </select>
        </div> 
        <div className='add-price flex-col'>
           <p>product price</p>
           <input  onChange={onChangeHandler}  value={data.price} type='Number' name='price' placeholder='Rs 20'/>
        </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
    </form>
     </div>
  )
}

export default Add