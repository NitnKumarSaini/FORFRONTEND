import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
const email = useRef()
const password = useRef()
const nextpage= useNavigate()
const handleclick =()=>{
    if(email.current.value&&password.current.value  )
    {
        localStorage.setItem("email", email.current.value)
        localStorage.setItem("password", password.current.value)
        localStorage.setItem("Signup", email.current.value)
        alert("SignUp successfully")
        
        nextpage("/login")
    }else{alert("try again")}
}



  return (
<>
    <div className="conatiner">
        <h1>Signup</h1>
        <div className="row">
            <div className="col-lg-8">
                <div style={{border:"4px solid gray" , height:"400px ", width:"300px"}}>
<label>Email</label>
<input type='text'  ref={email} placeholder='enter email'/><br></br>
<label>password</label>
<input type='text'  ref={password} placeholder='enter ppassword'/>
<button onClick={handleclick}>SignUp</button>
                </div>
            </div>
        </div>
    </div>
    </>  )
}

export default Signup