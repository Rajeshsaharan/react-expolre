import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
      <>
      <div>Home</div>
   {/* //navigate programatically using useNavigation hook */}
  <button onClick={()=>{navigate('/contact')}}>go to contact us after submiting or clicking programatically</button>
      </>
    
  )
}

export default Home