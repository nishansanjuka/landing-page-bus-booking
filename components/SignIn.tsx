import React from 'react'

export default function SignIn() {

  const HandleGettingStarted = () => {

    const reg_form:any = document.getElementById("welcom-header");

    reg_form.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest' 
    });
  }
  return (
    <div className='w-full h-[100dvh] grid grid-cols-2 p-7 sm:p-10 bg-black/70'>
      <section className=' col-span-2 lg:col-span-1 w-full text-white flex flex-col justify-center p-5'>

        <h1 className='top-to-bottom font-bold text-3xl sm:text-7xl 2xl:text-8xl'>Instantly Book Ur Trip</h1>

        <article className='fade-in mt-2 sm:mt-5 pl-2'> 
          <h3 className=' text-lg sm:text-3xl font-bold underline underline-offset-4 text-yellow-200'>Your Ultimate Bus Ticket Booking Platform</h3>
          <p className='mt-1 sm:mt-3 pr-2 text-xs sm:text-lg'>Discover the ease of travel with EasyRide, your one-stop destination for seamless bus ticket bookings. Whether you&apos;re planning a weekend getaway, a business trip, or a holiday adventure, EasyRide makes your journey hassle-free.</p>

          <button onClick={HandleGettingStarted} className=' mt-1 sm:mt-3 p-2 sm:p-3 bg-yellow-300 text-black hover:bg-yellow-200 transition duration-300 text-[8px] sm:text-sm rounded font-bold uppercase'>Get Started</button>
        </article>
      </section>

      <section className='col-span-2 lg:col-span-1 w-full text-white flex flex-col justify-center items-center sm:p-5 sm:px-10'>

        
        <div className='fade-in-late p-4 sm:p-10 w-full backdrop-blur-md bg-yellow-100/30 rounded-md'>
          <h2 className=' text-md sm:text-3xl'>Already Registered?</h2>
          
          <form className='w-full mt-2 sm:mt-5 text-sm sm:text-lg'>

            <label htmlFor="username">Username :</label>
            <input type="text" placeholder='username'  className='w-full p-2 rounded border border-yellow-300 bg-yellow-100/30 text-black font-bold outline-none px-5 placeholder:text-white tracking-wider mb-3'/>

            <label htmlFor="username">Password :</label>
            <input type="password" placeholder='password'  className='w-full p-2 rounded border border-yellow-300 bg-yellow-100/30 text-black font-bold outline-none px-5 placeholder:text-white tracking-wider'/>

            <button className='w-full mt-5 uppercase bg-yellow-300 p-3 rounded text-black font-bold text-xs sm:text-lg hover:bg-yellow-200 transition duration-300'>Sign In</button>
          </form>
        </div>
      </section>
    </div>
  )
}
