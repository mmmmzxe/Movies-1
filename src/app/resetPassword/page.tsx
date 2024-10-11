import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import ResetPasswordPage from '../pages/resetPassword';
import Header2 from '@/components/Header2';

const ResetPassword=()=> {


  return (
    <>
    <Header2/>
    <section className='m-auto fix-height  px-7  flex items-center justify-center'>
    <div className='m-auto rounded-lg p-5 w-full md:w-2/3'>
     <h1 className='text-3xl font-bold mb-5 '>ResetPassword</h1>
     <ResetPasswordPage/>
    </div>
  </section></>
  
  );
}
export default ResetPassword