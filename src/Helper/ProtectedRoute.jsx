import React from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    
    const { login } = React.useContext(UserContext);

    if(login === true){
        return children;
    }

    if(login === false){
        return <Navigate to="/login" />;
    }

    return <></>
}

export default ProtectedRoute;