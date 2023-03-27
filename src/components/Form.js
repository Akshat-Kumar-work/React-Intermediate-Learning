import { useState } from 'react';
function Form (){
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
       email:"",
       Comments:""
   }
                     );




function changeHandler (event){
//isme previous state jo hai form data jisek andar object hai usko 
// copy kar rhe hai aur jis element m trigger hua hai event uski value ko bhi update kr rhe hai using spread operator
setformData((prevFormData) =>{ return ({...prevFormData,[event.target.name]:event.target.value})   } );
    
}
console.log(formData)

    return(
        <div>
<form>
     <input type="text" placeholder='first name' onChange={changeHandler} name="firstName" value={formData.firstName} />

     <br></br>
     <br></br>

     <input type="text" placeholder='second name' onChange={changeHandler} name="lastName" value={formData.lastName}/>
     

     <br></br>
     <br></br>

     <input type="email" placeholder='Enter your email here' onChange={changeHandler} name="email" value={formData.email}/> 

     <br></br>
     <br></br>

     <textarea placeholder='enter your comments here' onChange={changeHandler} name="Comments" value={formData.Comments}
     ></textarea>
     </form>
        </div>
    )
}
export default Form;