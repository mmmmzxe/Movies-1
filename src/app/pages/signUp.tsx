'use client'; // This makes it a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import Link from 'next/link';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/api/v1/user/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password , name , confirmPassword}),
        });
        if (password !== confirmPassword) {
          // Define setError function or use useState hook to manage error state
          toast.error("Password and confirmPassword is not Match ", {
            duration: 4000,
            progress: true,
            position: "top-right",
            transition: "bounceIn",
            icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 8V12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 16.0195V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>',
            sonido: true,
          });
          
          return;
        }

        if (res.ok) {
          router.push('/login'); 
          toast.success("sing Up Success ", {
            duration: 4000,
            progress: true,
            position: "top-right",
            transition: "bounceIn",
            icon: '',
            sonido: true,
          });
          
          // Redirect to login after successful signup
        } else {
          toast.error("Signup failed ", {
            duration: 4000,
            progress: true,
            position: "top-right",
            transition: "bounceIn",
            icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 9L15 15M15 9L9 15M8 2H16L22 8V16L16 22H8L2 16V8L8 2Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
            sonido: true,
          });
       
        }
      };

  return (
    <div className='  lg:w-[90%] w-full items-center flex justify-center text-black divide-y divide-gray-200 mt-8 p-8 border-solid border-r border-t border-white rounded-xl'>
    
      <form onSubmit={handleSubmit} className=' flex w-full flex-col mt-12 p-10 gap-5 items-center text-center justify-center'>
   <div  className='w-full items-center lg:flex-row flex-col flex justify-center '>
    <label  className=' m-5  w-[15%]'>Name</label>
    <input className='p-2 border rounded-full m-2'
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
   </div>
   <div  className='w-full items-center  lg:flex-row flex-col flex justify-center '>
    <label  className=' m-5  w-[15%]'>Email</label>
    <input className='p-2 border rounded-full m-2'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
   </div>
     <div  className='w-full items-center  lg:flex-row flex-col flex justify-center '>
      <label  className=' m-5  w-[15%]'>
      Password
      </label>
        
      <input className='p-2 border rounded-full m-2 '
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
     </div>
       <div  className='w-full  lg:flex-row flex-col items-center flex justify-center '>
        <label  className=' m-5 '>
        ConfirmPassword
        </label>
        <input className='p-2 border rounded-full m-2'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirmPassword"
        />
       </div>
       
       <div className='flex'>
          <p>Do you have an account?</p>
          <Link href='/login' className='text-blue-400'> LogIn</Link>
        </div>
        <button className='button' type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
