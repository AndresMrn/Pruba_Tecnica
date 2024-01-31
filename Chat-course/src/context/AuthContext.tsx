import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User, AuthContextProps } from "../models";
import { registerRequest, loginRequest, verifyToken, logout} from "../services/auth";
import Cookies from "js-cookie";



export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
interface AuthProviderProps {
  children: ReactNode;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Not found context")
  }
  return context
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loadData, setLoadData] = useState(true);

  const singUp = async (user: User) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setAuthenticated(true)
    } catch (error) {
      console.error
    }
  };


  const singIn = async (user: User) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setAuthenticated(false),
          setUser(null)
          setLoadData(false)
        return setUser(null)
      }
      try {
        const res = await verifyToken(cookies.token)
        console.log(res)
        if (!res.data) {
          setAuthenticated(false)
          setLoadData(false)
          return
        }


        setAuthenticated(true)
        setUser(res.data)
        setLoadData(false)
      } catch (error) {
        setAuthenticated(false)
        setUser(null)
        setLoadData(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        singUp,
        singIn,
        user,
        authenticated,
        loadData
      }}>
      {children}
    </AuthContext.Provider>
  );
};
