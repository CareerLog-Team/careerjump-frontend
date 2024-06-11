import {ReactNode, createContext, useEffect, useState} from "react";

interface User {
  accessToken: string;
}

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext({
  user: null as User | null,
});

export const AuthContextProvider = ({children}: AuthProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{user: currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
