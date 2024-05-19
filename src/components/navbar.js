"use client"
import React, {useState, useEffect } from 'react'
import Link from 'next/link'
import { getcookie } from '@/helper/getcookie'
import { useContext } from 'react'
import { cookieChecker } from '@/context/cookieValid'

const navbar = () => {
  const [check, setcheck] = useState(false)
  let value = useContext(cookieChecker)
  async function load(){
    let cookie=await getcookie();
    if(cookie){
      setcheck(true)
    }
    else{
      setcheck(false)
    }
  }
  useEffect(() => {
    load()
  }, [])
  
  return (
    <>
  <ul className="grid bg-gray-900 py-4 text-white grid-cols-15">
    <li className="col-start-2 text-lg font-semibold hover:text-green-300">
      <Link href={'/'}>Home</Link>
    </li>
    <li className="col-start-3 text-lg font-semibold hover:text-green-300">
      <Link href={'/recipe'}>Recipes</Link>
    </li>
    <li className="col-start-4 text-lg font-semibold hover:text-green-300">
      <Link href={'/meals'}>Meals</Link>
    </li>
    <li className="flex gap-5 col-start-10">
      {!value.check && (
        <>
          <div className="font-customRoboto text-xl font-semibold hover:text-orange-300">
            <Link href={'/login'}>Login</Link>
          </div>
          <div className="font-semibold font-customRoboto text-xl hover:text-orange-300">
            <Link href={'/signup'}>Sign Up</Link>
          </div>
        </>
      )}
      {value.check && (
        <div className="font-customRoboto text-xl font-semibold hover:text-orange-300">
          <Link href={'/logout'}>Logout</Link>
        </div>
      )}
    </li>
  </ul>
</>

  )
}

export default navbar