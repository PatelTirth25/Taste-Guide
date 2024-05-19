"use client"
import React from 'react'
import { useRef, useState } from 'react';
import { getcookie } from '@/helper/getcookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const page = () => {
  const mealform = useRef()
  const [data, setdata] = useState({
    meal: "",
    food: "",
    id: ""
  })

  async function handleSubmit(form) {
    form.preventDefault()
    const cookie = await getcookie()
    data.id= cookie._id

    let d = await fetch("http://localhost:8080/meal", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( data )
    })

    let res= await d.json()
    
    if(res.success){
      toast.dark(res.message)
    }
    else{
      toast.error(res.message)
    }

    setdata({ meal: "", food: "" });
    mealform.current.reset();
    
  }

  function handlechange(form) {
    setdata({ ...data, [form.target.name]: form.target.value })
  }

  return (
    <div className="bg-gray-900 text-white py-8">
  <form ref={mealform} action="" onSubmit={(e) => { handleSubmit(e) }} className="container mx-auto px-4">
    <div className="meal mb-4">
      <label htmlFor="mealName" className="block">Meal Name:</label>
      <input id="mealName" onChange={(e) => handlechange(e)} name="meal" type="text" className="bg-gray-800 text-white px-3 py-2 rounded-md w-full" />
    </div>
    <div className="food mb-4">
      <label htmlFor="foodName" className="block">Food Name:</label>
      <input id="foodName" onChange={(e) => handlechange(e)} name="food" type="text" className="bg-gray-800 text-white pb-20 px-3 py-2 rounded-md w-full" />
    </div>
    <div className="file mb-4">
      
    </div>
    <ToastContainer />
    <div className='text-center'> 
      <input type="submit" value="Add" className="bg-blue-700 hover:bg-blue-600 text-white py-3 px-16 rounded-lg shadow-md cursor-pointer" />
    </div>
  </form>
</div>

  )
}

export default page
