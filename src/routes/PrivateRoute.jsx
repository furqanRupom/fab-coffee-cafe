import React, { useContext } from 'react';
import { CafeContext } from '../providers/AuthProviders';
import { Link, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user,loading} = useContext(CafeContext);
    console.log(user)
    if(loading){
        return <h1>data is loading</h1>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" replace={true} state={{form:location}}></Navigate>

};

export default PrivateRoute;