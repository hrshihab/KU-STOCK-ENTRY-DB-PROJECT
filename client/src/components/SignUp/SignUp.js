import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen  ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Create a new Account  !!</h1>
          </div>
          <form   className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Register</button>
              </div>
              
            </div>
          </form>
          <button  className="btn btn-outline btn-success">Google</button>
        </div>
      </div>
    );
};

export default SignUp;