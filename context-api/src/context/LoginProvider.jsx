import { createContext, useContext, useState } from "react";

// 1. create context
export const LoginContext = createContext();

// 2. wrap the components with provider
export default function LoginProvider(props) {

  const [signed, setSigned] = useState(false);

  const values = { signed, setSigned };

  return (
    <LoginContext.Provider value={values}>
      {props.children}
    </LoginContext.Provider>
  );
}

// 3. consume the context
export const useLoginContext = () => {
   return useContext(LoginContext)
}
