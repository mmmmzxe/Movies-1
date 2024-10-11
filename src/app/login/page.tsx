import Header from "@/components/Header"
import Login from "../pages/login"
import Header2 from "@/components/Header2"


const LoginPage =() =>{

  return (
    <>
    <Header2/>
<section className='m-auto fix-height  px-7  flex items-center justify-center'>
  <div className='m-auto rounded-lg p-5 w-full md:w-2/3 '>
   <h1 className='text-3xl font-bold '>LogIn</h1>
   <Login/>
  </div>
</section></>
  )
}

export default LoginPage