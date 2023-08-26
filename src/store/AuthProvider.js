import { useState ,useEffect} from "react";
import AuthContext from "./auth-context";

const AuthProvider=(props)=>{

    const storedToken = localStorage.getItem("token");

    const[token,setToken] = useState(null);
    const[isLoggedIn,setIsloggedIn]=useState(false);


    const login=(token)=>{
        setToken(token);
        localStorage.setItem('token',token);
        setIsloggedIn(true);
        console.log(token);
    }

    const logout=()=>{
        setToken(null);
        localStorage.removeItem('token');
    }

    const authContextValue = {
        token: token,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn
    };

    useEffect(() => {
        if (storedToken) {
          setToken(storedToken);
        }
      }, []);


    return(
        <AuthContext.Provider value={authContextValue}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;