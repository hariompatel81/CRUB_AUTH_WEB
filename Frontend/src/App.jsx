import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AuthForm from './auth/AuthForm';

const router = createBrowserRouter([
    {
      path:'/',
      element: <AuthForm />
    },
  ]);

const App = ()=>{
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
