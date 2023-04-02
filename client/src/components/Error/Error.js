import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
    <Header></Header>
 <div id="error-page" className='mt-40 text-lg'>
    <h1 className='font-bold text-5xl'>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
  </div>
  );
};

export default Error;