import React ,{ createContext, useState } from 'react';
import { useCallback } from 'react';
import api from '../services/api';

interface LoginCredentials{
    email: string;
    password: string;
}

interface UserVerify{
    email: string;
    password: string;
    name: string;
    id: string;
    crp?: string;
    description?: string;
    speciality?: string;
    uf?: string;
    city?: string;
    phone?: number;
  }

interface IAuthContext{
    login(credentials: LoginCredentials): Promise<void>;
    logout(): void;
    handleSearch(category: string): void;
    search: string;
    user: UserVerify;
    setUser(): void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) =>{
  const [search, setSearch ] = useState('');

  const handleSearch = (category: string)=>{
    console.log('DEU ISSO: ' + category)
    setSearch(category);
  }

    const [logedUser, setLogedUser] = useState(() => {
        const user = localStorage.getItem("@Psyhelp:user");
    
        if (user) {
          console.log('SACA SÓ: '+ JSON.parse(user))
          return { user: JSON.parse(user) };
        }
    
        return {};
      });

      const login = useCallback(async ({ email, password })=> {
        try {
            const response = await api.post('/sessions',{ email, password });
            const user = response.data;

            localStorage.setItem("@Psyhelp:user", JSON.stringify(user));
            setLogedUser({ user });
        } catch (error) {
            window.alert("Email ou senha incorretos!"); 
        }
          
        
      }, [setLogedUser]);

      const setUser = useCallback(()=>{
        setLogedUser({});
      },[])



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
            search,
            handleSearch,
            user: logedUser.user,
            setUser,
            }}>
            {children}
        </AuthContext.Provider>
    )
}
