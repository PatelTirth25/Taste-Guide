"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getcookie } from '@/helper/getcookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const page = () => {
  const [alldata, setAlldata] = useState([])

  const load = async () => {
    let cookie=await getcookie()
    let x = await fetch('http://localhost:8080/meal', {
      method: "GET"
    })
    let res = await x.json()

    let filtered = res.filter(e=>{
      return cookie._id === e.id
    })
 

    setAlldata(filtered)
    
  }

  useEffect(() => {

    load()

  }, [alldata])

  const deletemeal=async (id)=>{
    console.log(id)
    let d = await fetch(`http://localhost:8080/meal/${id}`, {
      method: 'DELETE',
    })

    let res= await d.json()

    if(res.success){
      toast.dark(res.message)
    }
    else{
      toast.error(res.message)
    }

    // load()
    
  }


  return (
    <>
    <ToastContainer />
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <Link href="/meals/addmeal" className="bg-blue-700 hover:bg-blue-600 text-white py-3 px-14 rounded-lg shadow-md">
            Add Meal
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {alldata.map(item => (
            <div key={item._id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden p-4">
              <div className="text-center py-4 bg-gray-700 mb-4">
                <div className="text-lg font-bold">{item.name}</div>
              </div>
              <div className="px-4">
                <p className="text-gray-300 text-sm">{item.food}</p>
              </div>
              <div className="text-center pt-4">
                <button onClick={() => deletemeal(item._id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md">
                  Delete Meal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  


  )
}

export default page
