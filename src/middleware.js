"use server"
import { NextResponse } from 'next/server'
 
export function middleware(request) {

  //To redirect recipe , meal  and logout page
  if(!request.cookies.has("login") && (request.nextUrl.pathname == '/recipe' || request.nextUrl.pathname == '/meals' || request.nextUrl.pathname=='/logout')){
    return NextResponse.redirect("http://localhost:3000/login")
  }
  
  //To protect signin and signup page
  if(request.cookies.has("login") && (request.nextUrl.pathname == '/login' || request.nextUrl.pathname == '/signup')){
    return NextResponse.redirect("http://localhost:3000/profile/userid")
  }

  //To handle logout page
  // if(request.cookies.has("login") && request.nextUrl.pathname == '/logout'){
  //   console.log("I am in logout page")
  //   request.cookies.delete("login")
  //   return NextResponse.redirect("http://localhost:3000/login")
  // }
}
