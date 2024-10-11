import React from 'react'

import Signup from '../pages/signUp'
import Header from '@/components/Header'
import Header2 from '@/components/Header2'


const RegisterPafe=()=> {
  return (
    <>
    <Header2/>
    <section className='m-auto fix-height  px-7  flex items-center justify-center'>
    <div className='m-auto rounded-lg p-5 w-full md:w-2/3'>
     <h1 className='text-3xl font-bold mb-5'>Sing Up</h1>
     <Signup/>
    </div>
  </section></>
  )
}

export default RegisterPafe