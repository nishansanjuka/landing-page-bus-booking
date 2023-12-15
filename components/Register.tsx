import React, { useEffect } from 'react'
import men from '../public/assets/men.jpg'
import Image from 'next/image'
import FormRegister from './FormRegister'

import {Montserrat} from 'next/font/google'


const inter = Montserrat({ subsets: ['latin'] , weight:[ '300' , '400' , '500' , '700'] })


export default function Register() {


  useEffect(() => {
    console.log("Hey")
  }, [])

  return (
    <div id='welcom-header' className={` ${inter.className} xl:mt-10 w-full p-5 sm:text-lg xl:text-xl`}>
      <h1 className='sm:text-5xl font-bold'>Welcome to EasyRide Buss Booking Sri Lanka - Your Ultimate Bus Ticket Booking Platform</h1>

      <h1 className='w-full xl:w-[70%] mx-auto capitalize xl:text-4xl 2xl:text-5xl font-bold xl:my-2 2xl:my-5 p-5'>You want to try?</h1>

      <div id='register-form' className='w-full xl:w-[60%] mx-auto mb-10'>
        
        <section className=' w-full p-5 mx-auto grid grid-cols-2 sm:gap-10 backdrop-blur bg-yellow-300/30 '>
          
          <section className=' col-span-2 sm:col-span-1'>
            <Image src={men} alt='men' className='rounded-lg transition-all duration-300 h-full object-cover'/>
          </section>

          <section className=' col-span-2 sm:col-span-1 flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl mt-3 text-white font-bold'>Register</h1>
            
            <FormRegister/>

          </section>
        </section>
      </div>

      <ul className=' list-disc p-5 space-y-10'>
        <li className=' mt-5'>Embark on a journey of convenience and comfort with EasyRide, where we redefine the art of bus travel. As your ultimate ticket booking destination, EasyRide offers a seamless and stress-free experience for all your travel needs.</li>

        <li className='mt-4'>Discover the unparalleled ease of planning your trips with EasyRide. Whether you&apos;re gearing up for a spontaneous weekend getaway, preparing for a crucial business trip, or eagerly anticipating a well-deserved holiday adventure, EasyRide is your trusted companion in making every journey memorable.</li>

        <li className='mt-4'>At EasyRide, we pride ourselves on providing a comprehensive and user-friendly platform designed to simplify the bus ticket booking process. Say goodbye to the hassles of traditional booking methods and embrace the convenience of a modern travel experience.</li>
      </ul>

      <section className='w-full xl:w-[70%] mx-auto mt-10'>
        <ol className=''>
          <li className='font-bold text-4xl'>Key Features:
            <ul className=' list-disc text-lg font-normal pl-5 mt-3 space-y-5'>
              <li className=' font-bold'>Extensive Network:
                <p className='font-normal'>Explore a vast network of bus operators, connecting you to a myriad of destinations. From bustling cities to serene countryside escapes, EasyRide ensures you have access to the perfect ride for every occasion</p>
              </li>

              <li className=' font-bold'>Effortless Booking:
                <p className='font-normal'>Our intuitive interface guarantees a smooth and straightforward booking process. In just a few clicks, reserve your seat and prepare to embark on a journey marked by comfort and reliability.</p>
              </li>

              <li className=' font-bold'>Real-Time Updates:
                <p className='font-normal'>Stay informed with real-time updates on bus schedules, routes, and any changes to your journey. EasyRide keeps you in the loop, empowering you to plan your trip with confidence.</p>
              </li>

              <li className=' font-bold'>Secure Payments:
                <p className='font-normal'>Your safety is our priority. EasyRide provides secure payment options, offering you peace of mind as you book your tickets online.</p>
              </li>

              <li className=' font-bold'>Tailored Travel Experience: 
                <p className='font-normal'> Customize your journey to suit your preferences. Choose from various bus types, amenities, and seating options. Travel in style and comfort with EasyRide, where every detail is designed with your satisfaction in mind.</p>
              </li>

            </ul>
          </li>
          
        </ol>

      </section>

    </div>
  )
}
