"use client"
import React from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const page = () => {
  const formdel = useRef()
  const router = useRouter()


  async function handleSubmit(form){
    form.preventDefault();

    const newuser={
      name: form.target.name.value,
      email: form.target.email.value,
      password: form.target.password.value
    }

    let x=await fetch('http://localhost:3000/api/signup',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newuser)
    })

    let res=await x.json();
    if(res.success){
      router.replace("http://localhost:3000/login")
    
    }
    else{
      toast.error(res.message)
    }

    formdel.current.reset()

  }

  return (
    <div className='border rounded-md my-6 mx-[20%] border-black'>
      <ToastContainer />
      <div className='mx-[25%] font-bold text-3xl my-9'>Sign Up Here</div>
      <form ref={formdel} action="" onSubmit={e=>handleSubmit(e)}>

          <div className="grid grid-cols-2 px-20">

           
            <label htmlFor="name" className='text-xl font-semibold my-2'>User Name: </label>
            {/* <input type="text" id='name' className=" my-2 border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:border-blue-500" placeholder="Enter your name" /> */}
            <input type="text" id='name' className="w-full px-4 py-2 my-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-700" placeholder="Enter your name" />


            <label htmlFor="email" className='text-xl my-2 font-semibold'>Email : </label>
            {/* <input type="email" id='email' className="border my-2 border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:border-blue-500" placeholder="Enter your email" /> */}
            <input type="email" id='email' className="w-full px-4 py-2 my-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-700" placeholder="Enter your email" />
            
         
            <label htmlFor="password" className='text-xl my-2 font-semibold'>Password : </label>
            {/* <input type="password" id='password' className="border my-2 border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:border-blue-500" placeholder="Enter your passsword" /> */}
            <input type="password" id='password' className="w-full px-4 py-2 my-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-700" placeholder="Enter your password" />


            </div>
          
          <input type="submit" className='mx-[30%] my-4 bg-green-900 text-white text-3xl px-4 py-2 rounded-lg'  value="Confirm" />
      </form>
    </div>
  )
}

export default page
