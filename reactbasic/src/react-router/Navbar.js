import React from 'react'
// import {Link} from 'react-router-dom'
import { NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
  {/* <Link to = '/'>Home</Link>  */}
  {/* // Link are like a href tag in html */}
  {/* <Link to = "/about">About</Link> */}
{/* to give an active class link use Navlink instead of Link */}
    <NavLink to = '/'>Home</NavLink>
    <NavLink to = '/about'>About</NavLink>
    <NavLink to = '/product'>product</NavLink>

    </nav>
  )
}

export default Navbar