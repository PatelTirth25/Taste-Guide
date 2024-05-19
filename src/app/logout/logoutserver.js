"use server"

import { cookies } from 'next/headers'


export default async function logoutclient() {
  let cook=cookies()
  cook.delete("login")
}


