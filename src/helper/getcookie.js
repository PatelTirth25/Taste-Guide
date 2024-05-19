"use server"
import { cookies } from "next/headers"

export async function getcookie(){
    let cookie=cookies()
    if(cookie.has("login"))
        return JSON.parse(cookie.get("login").value)
    else
        return false
}