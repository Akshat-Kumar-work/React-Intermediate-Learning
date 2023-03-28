//import Form from './components/Form';
import { NavLink, Link, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import Support from './components/Support';

function App() {


  return (

    <div>

{/* using link tag to link one element to another */}
    {/* <nav>
      <ul>
        <li> <Link to='/' > Home </Link> </li>
        <li> <Link to='/support' > Support</Link> </li>
        <li> <Link to='/about' > About </Link> </li>
        <li> <Link to='labs' > Labs </Link> </li>
      </ul>
    </nav> */}


    {/* using NavLink tag to link one element to another and to add .active class to clicked or selected element */}
    <nav>
      <ul>
        <li> <NavLink to='/' > Home </NavLink> </li>
        <li> <NavLink to='/support' > Support</NavLink> </li>
        <li> <NavLink to='/about' > About </NavLink> </li>
        <li> <NavLink to='labs' > Labs </NavLink> </li>
      </ul>
    </nav>
    
    {/* bahot sare path create krne k lie routes use krty hai */}
    <Routes>

      {/* single path create krne k li route ka use krty hai */}
       <Route path="/" element={ <Home/> }/> 
       <Route path="/support" element={ <Support></Support> }/> 
       <Route path='/about' element={ <About></About> }/> 
       <Route path='/labs' element={  <Labs></Labs> }/> 
       <Route path='*' element={  <NotFound></NotFound>  }/> 

    </Routes>
    </div>
  );
}

export default App;
