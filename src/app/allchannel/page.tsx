
import Header2 from '@/components/Header2'
import FAQChannel from '../pages/ChannelList'

const AllChannel = () => {


  return (
    <div className=''>
           <Header2/>
           <div className=" flex flex-col m-auto pt-10 justify-center items-center text-white">
     
      <div className="  ">
      <div className='lg:w-[80%] w-full flex flex-col justify-center items-center m-auto '>
        <div>   <h1 className="text-4xl font-bold mb-6 text-center">
          Browse Through Our Extesive TV Station Collection
        </h1></div>
   
        <div className='mb-8'>
        <button className='button'>Watch Now</button>
</div>
      </div>
       <FAQChannel/>
      </div>
    </div>
    </div>
    
  )
}

export default AllChannel
