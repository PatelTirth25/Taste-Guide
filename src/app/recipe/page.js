"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getcookie } from '@/helper/getcookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const page = () => {
  const [all, setall] = useState([])

  useEffect(() => {
    let solve = async () => {

      let cookie=await getcookie()

      let res = await fetch('http://localhost:8080/recipe', {
        method: 'GET'
      })
      let x = await res.json()

      let filtered = x.filter(e=>{
        return cookie._id === e.id
      })
      setall(filtered)
      
    }
    solve();
  }, [all])

  async function handleDelete(id){
    try { let x=await fetch(`http://localhost:8080/recipe/${id}`,{
      method: 'DELETE',
    })
    let res=await x.json()
   
    if(res.success){
      toast.dark(res.message)
    }
    else{
      toast.error(res.message)
    }

  } catch{
    console.error("Error while handling DELETE request");
  }
  }

  return (
    <>
  <ToastContainer />
  <div className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="mb-8 text-center">
        <Link href='/recipe/addrecipe' className="bg-blue-700 hover:bg-blue-600 text-white py-3 px-14 rounded-lg shadow-md">
          Add Recipe
        </Link>
      </div>
      <div className="recipelist grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          all.map(e => {
            return (
              <div key={e._id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden p-4">
                <div className="text-center py-4 bg-gray-700 mb-4">
                  <div className="text-lg font-bold">{e.name}</div>
                </div>
                <div className="px-4">
                  <p className="text-gray-300 text-sm">{e.ingre}</p>
                </div>
                <div className="text-center pt-4">
                  <button onClick={() => handleDelete(e._id)} className="bg-red-800 hover:bg-red-700 text-white py-2 px-7 rounded-lg shadow-md">
                    Delete Recipe
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  </div>
</>


  )
}

export default page
