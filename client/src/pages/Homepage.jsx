import React from 'react'
import Navfront from '../components/navfront'
import Footer from '../components/Footer'
import Feedbackcontainer from '../components/Feedbackcontainer'
import Feedbackfrom from '../components/Feedbackfrom'

const Homepage = ({setlight,light}) => {
  return (
    <div>
      <Navfront setlight={setlight}  light={light}/>
      <Feedbackcontainer/>
      <Footer/>
    </div>
  )
}

export default Homepage
