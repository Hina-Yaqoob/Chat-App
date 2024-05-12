import React from 'react'
import Gender from './Gender'

const SignUp = () => {
  return (
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-300"> 
    <h1 class="animate-bounce"  style={{color:"darkgreen",display:'flex', justifyContent:"center",fontSize:"2rem",paddingTop:"3rem"}}>Blink-Chat</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">FullName</span>
          </label>
          <input type="text" placeholder=" Enter fullname"  className="input input-bordered input-sm w-full max-w-xs input-success" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text ">UserName</span>
            
          </label>
          
          <input type="text" placeholder="Enter username" className="input input-bordered input-sm w-full max-w-xs input-success" required />
    <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder=" Enter password"  className="input input-bordered input-sm w-full max-w-xs input-success" required />
        </div>
  

         <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm  Password</span>
          </label>
          <input type="password" placeholder=" Confirm password"  className="input input-bordered input-sm w-full max-w-xs input-success" required />
        </div>
         <Gender/>
       
          <label className="label">
             
 
            <a href="#" className="label-text-alt link link-hover hover:link-primary">{"Already"} have an account?</a>
          </label>
        </div>
        <div className="form-control pb-4">
          <button className="btn btn-sm btn-primary">SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp