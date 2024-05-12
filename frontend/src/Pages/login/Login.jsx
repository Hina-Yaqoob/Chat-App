import React from 'react'

const Login = () => {
  return (
  <>
     
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-300"> 
    <h1 class="animate-bounce"  style={{color:"darkgreen",display:'flex', justifyContent:"center", paddingTop:"1rem",fontSize:"2rem"}}>Blink-Chat</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder=" Enter username"  className="input input-bordered input-success" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Password</span>
            
          </label>
       
           
          <input type="password" placeholder="Enter Password" className="input input-bordered  input-success" required />
        
          <label className="label">
            
 
            <a href="#" className="label-text-alt link link-hover hover:link-primary">{"Don't"} have an account?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>

</>


  );
};

export default Login;