import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRouter() {

  const { isLogged } = useAuth();
  
  return <div>{isLogged ? <Outlet /> : <Navigate to="/login" />}</div>;
}
