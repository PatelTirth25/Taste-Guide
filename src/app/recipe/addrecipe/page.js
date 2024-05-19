"use client"
import React from 'react'
import { useRef,useState,useEffect } from 'react'
import { getcookie } from '@/helper/getcookie'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const page = () => {
  
    const recipeform = useRef()
    const [inp, setinp] = useState({
        recipename: "",
        ingrediant: "",
        id: ""
    })
    

    function handlechange(e){
        setinp({...inp,[e.target.name]:e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault()
        let cook=await getcookie()
        inp.id=cook._id
      
        let x=await fetch('http://localhost:8080/recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inp)
        })
        let res=await x.json()
      
        if(res.success){
          toast.dark(res.message)
        }
        else{
          toast.error(res.message)
        }
        
    }


  return (
    <div className="bg-gray-900 text-white py-8">
  <form ref={recipeform} action="" onSubmit={(e)=>{handleSubmit(e);recipeform.current.reset()}} className="container mx-auto px-4">
    <div className="recipename mb-4">
      <label htmlFor="recipeName" className="block">Recipe Name:</label>
      <input id="recipeName" onChange={(e)=>handlechange(e)} name="recipename" type="text" className="bg-gray-800 text-white px-3 py-2 rounded-md w-full" />
    </div>
    <div className="ingrediant mb-4">
      <label htmlFor="ingrediantName" className="block">Ingredient Name:</label>
      <input id="ingrediantName" onChange={(e)=>handlechange(e)} name="ingrediant" type="text" className="bg-gray-800 pb-20 text-white px-3 py-2 rounded-md w-full" />
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
