import Header from "@/components/Header"

import TVShows from "../pages/channels"


const Channels: React.FC = () =>{

  return (
    <>
    <Header/>
<section className='m-auto fix-height  px-7  flex items-center justify-center'>
  <div className='m-auto rounded-lg p-5 w-full md:w-2/3 '>
   <h1 className='text-3xl font-bold sh '>LogIn</h1>
   <TVShows />
  </div>
</section></>
  )
}

export default Channels