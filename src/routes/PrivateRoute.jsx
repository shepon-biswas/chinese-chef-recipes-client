import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return (<progress className="progress w-56 text-center"></progress>);
    }
    if(user){
        console.log(children);
        return children;
    }
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>;
};

export default PrivateRoute;