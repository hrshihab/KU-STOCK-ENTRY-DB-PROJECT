import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.pinimg.com/originals/39/c1/28/39c128f43f4dc21e0cf4dc2a8d803073.jpg")` }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl">
      <h1 className="mb-5 text-6xl font-bold">Stock Entry Management</h1>
      <p className="mb-5">Khulna University Stock Entry Management Department</p>
      <Link to='/login'><button className="btn btn-primary">Get Started</button>
      </Link>
      
    </div>
  </div>
</div>
  );
};

export default Home;