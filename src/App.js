//import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import Support from './components/Support';

function App() {


  return (

    <div>
    
    {/* bahot sare path create krne k lie routes use krty hai */}
    <Routes>

      {/* single path create krne k li route ka use krty hai */}
       <Route path="/" element={ <Home></Home>}/> 
       <Route path='/support' element={ <Support></Support> }/> 
       <Route path='/about' element={ <About></About> }/> 
       <Route path='/labs' element={  <Labs></Labs> }/> 
       <Route path='*' element={  <NotFound></NotFound>  }/> 

    </Routes>
    </div>
  );
}

export default App;
