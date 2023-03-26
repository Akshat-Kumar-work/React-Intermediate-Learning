
import { useState } from 'react';
import './App.css';
function App() {


//   const [firstname , setfirstname] =useState('')
  
//   const [lastname , setlastname] =useState('')

//   console.log(firstname)
//   console.log(lastname)
// function changeHandlerfirst (event){
//   setfirstname(event.target.value)
// }
// function changeHandlersecond (event){
//   setlastname(event.target.value)
// }

//to handle multiple states by declaring objects in useState

const[formData , setformData] = useState( 
                                           {
                                              firstName:"",
                                              lastName:"",
                                              email: ""
                                          }
                                                            );



function changeHandler (event){
  //isme previous state jo hai form data jisek andar object hai usko 
  // copy kar rhe hai aur jis element m trigger hua hai event uski value ko bhi update kr rhe hai using spread operator
  setformData((prevFormData) =>{ return( { ...prevFormData , [event.target.name]:event.target.value}  ) } );
}




  return (
    <div>

     <form>
     <input type="text" placeholder='first name' onChange={changeHandler} name="firstname" />

     <br></br>
     <br></br>

     <input type="text" placeholder='second name' onChange={changeHandler} name="lastname"/>
     </form>

     <br></br>
     <br></br>

     <input type="email" placeholder='Enter your email here' onChange={changeHandler} name="email"/> 
    </div>
  );
}

export default App;
