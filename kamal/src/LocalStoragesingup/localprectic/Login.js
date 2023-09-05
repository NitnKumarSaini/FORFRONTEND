import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
const emaill = useRef()
const navigate = useNavigate();
const checkemail = localStorage.getItem("signup")

const handelsubmit=(e)=>{
    e.preventDefault();
    if(checkemail === emaill.current.value){
        navigate("/Allpost")
        alert("it's done")
    }else{alert("something wrong")}
}


    return(
        <>
        <form onSubmit={handelsubmit}>
<label>Email</label>
<input ref={emaill}/>
<label>password</label>
<input type='password' />
<button type='Submit'>Submit</button>



        </form>
       
        
        
        </>
    )
}

export default Login