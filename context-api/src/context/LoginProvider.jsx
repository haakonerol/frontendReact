import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext();

export default function LoginProvider(props) {
  const [signed, setSigned] = useState(false);

  const values = { signed, setSigned }

  return (
    <LoginContext.Provider value={values}>
      {props.children}
    </LoginContext.Provider>
  );
}
