import React from 'react'
import {useNavigate} from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
  return (
      <>
       <div>Contact</div>
       <button onClick={()=>{navigate(-1)}}> go back to where you come from</button>
      </>
   
  )
}

export default Contact