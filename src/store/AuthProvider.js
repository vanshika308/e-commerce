import { useState ,useEffect} from "react";
import AuthContext from "./auth-context";

const AuthProvider=(props)=>{

    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");

    const[token,setToken] = useState(storedToken);
    const[email,setEmail] = useState(storedEmail);
    const userIsLoggedIn = !!token;


    const login=(token,email)=>{
        console.log(token);
        console.log(email);
        setToken(token);
        setEmail(email);
        localStorage.setItem('token',token);
        localStorage.setItem('email',email);
    }

    const logout=()=>{
        setToken(null);
        setEmail(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    const authContextValue = {
        email: email,
        token: token,
        login: login,
        logout: logout,
        isLoggedIn: userIsLoggedIn,
    };

    useEffect(() => {
        if (storedToken && storedEmail) {
          setToken(storedToken);
          setEmail(storedEmail);
        }
    }, [userIsLoggedIn,storedToken,storedEmail]);


    return(
        <AuthContext.Provider value={authContextValue}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;