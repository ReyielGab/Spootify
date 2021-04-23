import React from 'react';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function CoreLayout({ children , history, code }) {
  return (
    code ?
    <Dashboard code={code} children={children}/>
      : 
      <Login />
    
  );
}

export default CoreLayout;
