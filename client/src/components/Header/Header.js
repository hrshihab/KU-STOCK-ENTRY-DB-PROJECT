import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
          
      <div className="navbar bg-primary text-primary-content justify-between ">
        <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">KU STOCK ENTRY</Link>
        <div className=' md:px-20'>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/stock' className="btn btn-ghost normal-case text-xl">Stock</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-xl">Log In</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
        <Link to='/about' className="btn btn-ghost normal-case text-xl">About</Link>
        {/* <h2> {user?.email}</h2>
        {
                    user?.email ? 
                    <button onClick={handleOut} className="btn btn-sm">Log out</button>
                    : <Link to='/login'>
                        <button className='btn btn-sm'>Log In</button>
                    </Link>
                } */}

        </div>
        
      </div>

    </div>
  );
};

export default Header;