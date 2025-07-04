import React from 'react'
import { useAuth } from '../context/auth'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Feedbackfrom = () => {
  const navigate = useNavigate()
    const { feedbackon, setfeedbackon} = useAuth()
  return (
   
    <div onClick={()=>setfeedbackon(false)} className='flex flex-col justify-center items-center'>
      <div  className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center text-sm text-white bg-black/50 w-full h-screen lg:p-5'>
             <div className='bg-white text-black p-1  flex flex-col justify-center items-center lg:p-10 '>
                 <form onClick={(e)=>e.stopPropagation()} className="flex flex-col gap-4 m-auto  p-8 py-12 w-80 sm:w-[352px]  justify-center items-center ">
            <p className="text-2xl font-medium m-auto flex justify-center items-center ">
                <span className="text-[#33A491] text-[15px] text-center" >Was This PlatFrom HelpFull?</span>
            </p>
             
              <div className='flex justify-center items-center'>
                    <p> Got a Suggestion? <span  onClick={()=>{navigate("/Suggestion/datafromuser"),setfeedbackon(false)}} className='text-sm border-b-2 border-blue-700 text-blue-800'>Let Us Know</span></p>
              </div>
           <div className='flex gap-4'>
             <div className=" flex flex-col  text-[#33A491] w-full py-2 rounded-sm cursor-pointer border-1 p-2 border-gray-300">
               <p className='font-bold text-[11px]'>Need More Help?</p>
               <a href="" className=' text-blue-700 flex justify-center items-center text-[10.4px] mr-6 text-nowrap' >Contact Support <IoIosArrowForward className='text-[15px]'/></a>
            </div>
             <div className=" flex flex-col  text-[#33A491] w-full py-2 rounded-sm cursor-pointer border-1 p-2 border-gray-300">
               <p className='font-bold text-[10.4px]'>Want to give a FeedBack on a Feature?</p>
               <a href="" className=' text-blue-700 flex justify-center items-center text-[10.4px] mr-6 text-nowrap'onClick={()=>{navigate("/FeedBack/datafromuser"),setfeedbackon(false)}} >Submit Your FeedBack<IoIosArrowForward className='text-[15px]'/></a>
            </div>
             
           </div>
        </form>
             </div>
            
      </div>
    </div>
  )
}

export default Feedbackfrom
