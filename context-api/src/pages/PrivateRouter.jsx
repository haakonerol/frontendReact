import { Outlet, Navigate } from "react-router";
import { useContext } from "react";
// import { LoginContext } from "../context/LoginContext";
import { LoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { signed } = useContext(LoginContext);

  return signed ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
