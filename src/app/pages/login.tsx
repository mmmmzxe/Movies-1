'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import Cookies from 'js-cookie'; // Import js-cookie
import Link from 'next/link';
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Using the new useRouter from next/navigation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (res.ok) {
        const data = await res.json(); // Parse JSON response
  
        // Store token and user's name in cookies
        Cookies.set('authToken', data.token, { expires: 7 });
        Cookies.set('userName', data.user.name, { expires: 7 });
        Cookies.set('userId', data.user.id, { expires: 7 });

        // Redirect to PayPal payment page with user ID
        router.push(`/`);
        
        toast.success("Login Success", {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
          sonido: true,
        });
      } else {
        toast.error("Login failed", {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
          sonido: true,
        });
      }
    } catch (error) {
      toast.error("Error during login", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
        sonido: true,
      });
    }
  };
  
  return (
    <div className='items-center flex justify-center divide-y divide-gray-200 mt-8 p-8 border-solid border-r border-t border-white rounded-xl text-white'>
      <form onSubmit={handleSubmit} className='flex w-full flex-col gap-5 mt-10 items-center text-center justify-center'>
        <div className='w-full items-center text-center justify-center'>
          <label className='m-5 w-[17%]'>Email</label>
          <input
            className='p-2 border rounded-full m-2 text-black'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </div>
        <div className='w-full items-center text-center justify-center'>
          <label className='m-3 w-[17%]'>Password</label>
          <input
            className='p-2 border rounded-full m-2 text-black'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </div>
  
        <div className='flex'>
          <p>Don&apos;t have an account?</p> {/* Fix applied here */}
          <Link href='/register' className='text-blue-400'> Sign up</Link>
        </div>
        <Link href='/forgotPassword' className=''><p className='mt-5'>Forgot your password?</p></Link>
        <button type='submit' className='button'>Login</button>
      </form>
    </div>
  );
};

export default Login;
