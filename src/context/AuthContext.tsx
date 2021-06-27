import React ,{ createContext, useState } from 'react';
import { useCallback } from 'react';
import api from '../services/api';

interface LoginCredentials{
    email: string;
    password: string;
}

interface IAuthContext{
    login(credentials: LoginCredentials): Promise<void>;
    logout(): void;
    user: object;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) =>{

    const [logedUser, setLogedUser] = useState(() => {
        const user = localStorage.getItem("@Psyhelp:user");
    
        if (user) {
          return { user: JSON.parse(user) };
        }
    
        return {};
      });

      const login = useCallback(async ({ email, password })=> {
        try {
            const user = await api.post('/sessions',{ email, password });
          
            localStorage.setItem("@Psyhelp:user", JSON.stringify(user));
            setLogedUser({ user });
        } catch (error) {
            window.alert("Email ou senha incorretos!"); 
        }
          
        
      }, []);



      const logout = useCallback(()=> {
        try {
          
            localStorage.removeItem("@Psyhelp:user");
            setLogedUser({});
        } catch (error) {
            window.alert("Email ou senha incorretos!"); 
        }
          
        
      }, []);
    
    return(
        <AuthContext.Provider value={{
            login,
            logout,
            user: logedUser.user,
            }}>
            {children}
        </AuthContext.Provider>
    )
}
