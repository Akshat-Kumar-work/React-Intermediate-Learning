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
       Comments:"",
       isVisible:false,
       mode:"",
       favCar:""
   }
                     );


function changeHandler (event){

//isme previous state jo hai form data jisek andar object hai usko 
// copy kar rhe hai aur jis element m trigger hua hai event uski value ko bhi update kr rhe hai using spread operator
//event jis target par hua hai agar uske name ka type check box hai toh usme checked or unchecked dalo aur agar type checkbox nahi hai toh value dalo
setformData((prevFormData) =>{ return ({...prevFormData,[event.target.name]:event.target.type ==="checkbox"? event.target.checked : event.target.value })   } );
    
}


function submitHandler (event){
    event.preventDefault();
    console.log("printing submited form data")
    console.log(formData)
}

    return(
        <div>
<form onSubmit={submitHandler}>
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

     <br></br>
     <br></br>

     <input type="checkbox" onChange={changeHandler} name="isVisible"  id="isvisible" checked={formData.isVisible}
     ></input>
     <label htmlFor='isvisible'>Am i visible?</label>

     <br></br>
     <br></br>

     <input type='radio' onChange={changeHandler} name="mode"  id="online-mode" 
     checked={formData.mode === "Online-Mode" }
     value="Online-Mode"  ></input>
     <label htmlFor='online-mode' >online mode</label>

     <input type='radio' onChange={changeHandler} name="mode"  id="offline-mode"
      checked={formData.mode === "Offline-Mode" } 
     value="Offline-Mode"></input>
     <label htmlFor='online-mode' >offline mode</label>

     <br></br>
     <br></br>

     <label htmlFor='favCar'>select fav car</label>
     <select onChange={changeHandler} name="favCar" id='favCar' value={formData.value}>

     <option value="fortuner">fortuner</option>
     <option value="bmw">bmw</option>
     <option value="ferari">ferari</option>
     <option value="thar">thar</option>

     </select>

     <br></br>
     <br></br>
     
    <button >
        submit
    </button>

     </form>
        </div>
    )
}
export default Form;