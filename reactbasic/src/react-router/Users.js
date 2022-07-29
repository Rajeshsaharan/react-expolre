import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {
  return (
      //rendred as dynamically 
      <>
      {/* try to render nothing here because if we render here something that will shows on of all element */}
      <Outlet/>
      </>
    
  )
}

export default Users