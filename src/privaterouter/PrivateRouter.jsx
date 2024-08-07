import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const locations=useLocation();
    if(loading){
        return (
            <div>
                Loading...
            </div>
        )
    }
    if(user){
        return children;
    }
  return (
    <Navigate to="/login" state={{from:locations}} replace></Navigate>
  )
}

export default PrivateRouter;