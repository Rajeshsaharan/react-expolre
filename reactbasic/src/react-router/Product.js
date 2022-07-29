import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'
const Product = () => {
    return (
        <>
            <div>Product</div>
            <nav>
                {/* //to use nested url we can use NavLink or Link tag */}
                <NavLink to="featured">Featured</NavLink>
                <NavLink to="new">new product</NavLink>
            </nav>
         <Outlet/>
        </>

    )
}

export default Product