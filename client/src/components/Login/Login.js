import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login to your Account!</h1>
          </div>
          <form   className="card flex-shrink-0 w-full max-w-sm   shadow-2xl ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link to='/register' className="label-text-alt link link-hover">Don't have an account?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <Link to='/stock'><button type='submit' className="btn btn-primary">Login</button></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;