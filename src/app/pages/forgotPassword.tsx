'use client'; // Client Component since it has interactive features

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js useRouter
import { toast } from 'nextjs-toast-notify';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // To show success or error messages
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/v1/user/forgetPassword', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
      
      
        
        // After success, redirect to the OTP page
        router.push('/resetPassword');
        toast.success('Password reset link has been sent to your email!', {
          duration: 2000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
          
      sonido: true,
        }); // Adjust the path if necessary
      } else {
     
         
        toast.error('Failed to send password reset link. Please try again.', {
          duration: 2000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",

          
      sonido: true,
        });
      }
    } catch (error) {
   
      toast.error('An error occurred. Please try again later.', {
        duration: 2000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
        
      sonido: true,
      });

    }
  };

  return (
    <div className="h-[50vh] m-10 w-[90%] items-center flex justify-center">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5 items-center text-center justify-center">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <p>Enter your email address, and we will send you a link to reset your password.</p>
        
        <input
          className="p-2 border rounded-full w-2/3 m-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        
        <button type="submit" className="button">Send Reset Link</button>

        {message && <p className="mt-3 text-blue-500">{message}</p>} {/* Display success or error message */}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
