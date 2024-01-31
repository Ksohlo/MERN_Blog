import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex flex-col md:flex-row p-3 max-w-3xl mx-auto md:items-center gap-5'>
        {/* ---left side */}
        <div className='flex-1'>
          <Link to="/" className=' sm:text-4xl font-bold dark:text-white text-3xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>K_sohlo's</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project and you can sign up with your email or wih google
          </p>
        </div>
        {/* ---right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your Username' />
              <TextInput type='text' placeholder='Username' id='username' />

              <Label value='Your Email' />
              <TextInput type='text' placeholder='Email' id='email' />

              <Label value='Your Password' />
              <TextInput type='text' placeholder='Password' id='password' />
              
              <Button gradientDuoTone="purpleToPink" type='submit' className='mx-auto mt-3 w-full'>Sign Up</Button>
            </div>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an acoount </span>
            <Link to='/signin' className='text-blue-500'>
              sign In
            </Link>
          </div>
        </div>
      </div>
      

    </div>
  )
}
