"use client"
import React from 'react'
import { cookieChecker } from '@/context/cookieValid'
import { useState,useEffect } from 'react'
import { getcookie } from './getcookie'

const userprovider = ({children}) => {
    const [check, setcheck] = useState(false)
    useEffect(() => {
      async function load(){
        const cook=await getcookie()
        if(cook){
          setcheck(true)
        }
      }
      load()
    }, [])
    
  return (
    <cookieChecker.Provider value={{check,setcheck}}>{children}</cookieChecker.Provider>
  )
}

export default userprovider
