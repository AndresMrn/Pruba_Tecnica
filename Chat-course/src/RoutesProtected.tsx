import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext"

export default function RoutesProtected(){

    const {loadData, authenticated} = useAuth();
    console.log(loadData, authenticated);
    if(loadData) return <h1>Loading...</h1>
    if(!loadData && !authenticated) return <Navigate to="/" replace/>

    return (
        <Outlet/>
    )
}