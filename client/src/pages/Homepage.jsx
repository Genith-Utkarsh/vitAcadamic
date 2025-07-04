import React from 'react'
import Navfront from '../components/Navfront'
import Footer from '../components/Footer'
import Feedbackcontainer from '../components/Feedbackcontainer'

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
