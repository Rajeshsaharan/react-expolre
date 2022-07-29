import React from 'react'
import { Link } from 'react-router-dom'

const Alluser = () => {
  return (
      <>
     
    <div>Alluser
        <h2>user1</h2>
        <h2>user2</h2>
        <h2>user3</h2>
    </div>
    <Link to ="/user/3">go to user3</Link>
    </>
  )
}

export default Alluser