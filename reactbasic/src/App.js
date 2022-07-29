import { Routes, Route } from 'react-router-dom'
import Home from './react-router/Home';
import About  from './react-router/About';
import Navbar from './react-router/Navbar';
import Contact from './react-router/Contact';
import Product from './react-router/Product'
import FeaturedProduct from './react-router/FeaturedProduct';
import NewProduct from './react-router/NewProduct';
import Users from './react-router/Users';
import Userdetails from './react-router/Userdetails';
import Alluser from './react-router/Alluser';

function App() {
  return (
    <>
    <Navbar/>
     {/* // for showing on all route any component declare it outside the <Routes></Routes> */}
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="about" element={ <About/> }></Route>
      <Route path="contact" element={ <Contact/> }></Route>
      {/* // Route takes two props first is path and second is element that we want to render */}
     {/* for nested route we can use <Route> <nested Route ></nested></Route> */}
     <Route path = 'product' element = { <Product/>}>
      {/* //index route for nested route */}
      <Route index element = {<FeaturedProduct/>}></Route> 
      {/* //also shows FeaturedProduct on index or /product route */}

       {/* //nested route */}
       <Route path = 'featured' element = {<FeaturedProduct/>}></Route>
       <Route path = 'new' element = {<NewProduct/>}></Route>

     </Route>
     <Route path = 'user' element = {<Users/>}>
       {/* //nested routes in the dynamic route */}
       <Route path ="all" element = {<Alluser/>}></Route>
      <Route path =":id" element = {<Userdetails/>}></Route>
     </Route>
    </Routes>
    </>
  );
}

export default App;
