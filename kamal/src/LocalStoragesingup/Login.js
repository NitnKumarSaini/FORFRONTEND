import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const emai = useRef()
    const history = useNavigate()
    const sholocal = localStorage.getItem("Signup")

    const handlesubmit = () => {

        if (sholocal === emai.current.value) {
            alert("ok")
            history("/allpost")
        } else {
            alert("please SignUp again")
        }

    }

    return (
        <>
            <div className="conatiner">
                <h1>Login</h1>
                <div className="row">
                    <div className="col-lg-8" style={{ display: "grid", alignItems: "center", backgroundColor: "lightgray" }}>
                        <div style={{ border: "4px solid gray", height: "400px ", width: "300px" }}>
                            <label>Email</label>
                            <input type='email' ref={emai} placeholder='enter email' /><br></br>
                            <label>password</label>
                            <input type='number' placeholder='enter ppassword' />
                            <button onClick={handlesubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login