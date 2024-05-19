"use client"
import React from 'react'
import logoutclient from './logoutserver'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { cookieChecker } from '@/context/cookieValid'

const page = () => {
    let cook = useContext(cookieChecker)
    cook.setcheck(false)
    logoutclient()

    const route = useRouter()
    route.replace("http://localhost:3000/")

    return (
        <div>
            Logging out....
        </div>
    )
}

export default page
