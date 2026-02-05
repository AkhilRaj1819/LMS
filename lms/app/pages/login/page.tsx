"use client"

import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const login = () => {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center px-4"
      style={{
        backgroundColor: "#F0EEE9",
        backgroundImage:
          "radial-gradient(#2a2a2a 2px, transparent 2px)",
        backgroundSize: "130px 130px",
      }}
    >
     <div className="w-2/3 max-w-md  border-1 bg-[#F0EEE9] rounded p-10" >
      <img src="https://ggu.edu.in/wp-content/uploads/2025/03/ggu-new-logo.png" alt="" className="w-1/3 mb-"/>
      <p className="max-w-md pt-5 pb-5">Sign in to access your courses, assignments, grades and announcements at
    your university.</p>
    <button onClick={()=> signIn("google",{
      callbackUrl: "/",
    })} className="border w-fit p-1.5 flex gap-2 cursor-pointer">
      <Image src={`https://kalvium.community/assets/google_icon-c3f37307.svg`} alt="google_Logo" width={20} height={20}></Image>
      Continue with Google
    </button>
     </div>
    </div>
  )
}

export default login
