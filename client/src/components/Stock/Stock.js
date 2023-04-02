import React from 'react';
import { Link } from 'react-router-dom';

const Stock = () => {

  return (
    <div className='mt-8 border border-b-gray-300 rounded-lg mx-16 '>
      <h3 className='text-white font-semibold text-center text-3xl  p-8  '>Stock Entry Management Database</h3>
     <ul className="menu bg-slate-400  rounded-box text-white bg-opacity-50 font-bold mx-auto w-1/3 mb-12 ">
 
  <li className="hover-bordered"><Link>Discipline Head</Link></li>
  <li className="hover-bordered"><Link to='/items'>Items</Link></li>
  <li className="hover-bordered"><Link>Office Staff</Link></li>
  <li className="hover-bordered"><Link>Stock Officer</Link></li>
  <li className="hover-bordered"><Link>Supplier</Link></li>
  <li className="hover-bordered"><Link>Treasurer</Link></li>
</ul>
    </div>
  );
};

export default Stock;