import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const email= useRef();
    const password = useRef()
    const navigate = useNavigate()

const handlesubmit=(e)=>{
e.preventDefault();
if(email.current.value&& password.current.value){
    localStorage.setItem("email ", email.current.value);
    localStorage.setItem("password", password.current.value);
    localStorage.setItem("signup", email.current.value);

    alert("you are Signup")
    navigate("/Login")
}else{alert("something is wrong try agian")}
}


  return (
   <>
   <form onSubmit={handlesubmit}>
<label>Email</label>
<input type='email' ref={email}></input>
<label>password</label>
<input type='password' ref={password}></input>

<button type='submit'>Signup</button>


   </form>
   
   
   </>
  )
}

export default Signup