"use client";

import React from 'react'
import { RingLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className='w-full h-[100dvh] space-y-3 bg-white flex flex-col justify-center items-center'>
        <RingLoader color="#000" />
        <p className='text-md'>please wait...</p>
    </div>
  )
}
