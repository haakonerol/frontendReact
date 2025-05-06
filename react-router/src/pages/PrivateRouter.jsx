import { Navigate, Outlet } from "react-router-dom"


export default function PrivateRouter() {

   const isLogged = false
  return (
    <div>
      {isLogged ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}
