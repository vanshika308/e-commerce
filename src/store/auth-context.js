import React from "react";

const AuthContext=React.createContext(
    {
        token: null,
        email: null,
        login:(token,email)=>{},
        logout:()=>{},
        isLoggedIn: ''
});

export default AuthContext;