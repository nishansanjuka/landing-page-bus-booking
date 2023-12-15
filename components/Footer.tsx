"use client"
import React from 'react'
import {FaPhone, FaWhatsapp} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaMailBulk} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='pb-0 bg-yellow-500 mt-10'>
        <h1 className='pt-10 pl-10 font-bold uppercase text-4xl underline'>EasyRide</h1>
        <p className='pl-10 relative bottom-2 font-bold'>bus booking dot com</p>
        <section className='w-full mb-2 p-3 flex items-center justify-center space-x-5 text-2xl'>
            <FaWhatsapp/>
            <FaFacebook/>
            <FaInstagram/>
            <FaMailBulk/>
            <FaPhone/>
        </section>
        <p className=' text-center bg-yellow-900 text-white'>2k23 © Nipuna Nishan</p>
    </footer>
  )
}
