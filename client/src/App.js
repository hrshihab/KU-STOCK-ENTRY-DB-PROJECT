import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout.js/Main';
import Home from './components/Home/Home';
import Stock from './components/Stock/Stock';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
import Error from './components/Error/Error';
import Items from './components/Stock/Items';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'stock',
          element:<Stock></Stock>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<SignUp></SignUp>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'items',
          element:<Items></Items>
        }
      ]
    }
  ])
  return (
    <div >
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
