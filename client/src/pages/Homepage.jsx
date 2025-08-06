import React from 'react'
import Navfront from '../components/Navfront'
import Footer from '../components/Footer'
import Feedbackcontainer from '../components/Feedbackcontainer'
import Animation from '../components/Animation'

const Homepage = ({setlight,light}) => {
  return (
    <div>
      <Navfront setlight={setlight}  light={light}/>
      {/* <Feedbackcontainer/> */}
       <div className='flex justify-center items-center text-center'>
         <h1 className="text-3xl md:text-[45px] mb-6 font-bold text-[#33A491] drop-shadow-lg tracking-wide">
        Hear from Our First-Year Students
      </h1>
       </div>
      <Animation/>
      <Footer/>
    </div>
  )
}

export default Homepage
