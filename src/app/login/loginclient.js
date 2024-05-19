"use client"

import React from 'react'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from 'react';
import { cookieChecker } from '@/context/cookieValid';

const loginclient = () => {
    const formdel = useRef()
    const router = useRouter()
    const cook = useContext(cookieChecker)

  async function handleSubmit(form){
    
    form.preventDefault();
      
      const newuser={
        email: form.target.email.value,
        password: form.target.password.value
      }
      
      let x=await fetch('http://localhost:3000/api/login',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newuser)
      })
    
      let res=await x.json()


      if(res.success==true){
        cook.setcheck(true)
        router.replace("http://localhost:3000/")
      }
      else{
        toast.error(res.message,{
          position: "top-left"
        })
      }
      
    formdel.current.reset()

  }
  
  return (
    <>
    <div className='border rounded-md my-6 mx-[20%] border-black'>
     
      <ToastContainer />
      <div className='mx-[25%] font-bold text-3xl my-9'>Sign In Here</div>

      <form ref={formdel} action="" onSubmit={e=>handleSubmit(e)}>

          <div className="grid grid-cols-2 px-20">

            <label htmlFor="email" className='text-xl my-2 font-semibold'>Email : </label>
            <input  type="email" id='email'  className="w-full my-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-700" placeholder="Enter your email" />

         
            <label htmlFor="password" className='text-xl my-2 font-semibold'>Password : </label>
            <input type="password" id='password' className="w-full px-4 py-2 my-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-700" placeholder="Enter your password" />


            </div>
          <input type="submit" className='mx-[30%] my-4 bg-green-900 text-white text-3xl px-4 py-2 rounded-lg'  value="SignIn" />
      </form>
    </div>
    </>
  )
}

export default loginclient
