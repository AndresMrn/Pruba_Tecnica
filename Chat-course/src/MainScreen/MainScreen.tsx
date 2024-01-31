import Routers from "../Routers";
import { AuthProvider } from "../context/AuthContext";

export default function MainScreen() {

    return (
        <>
            <AuthProvider>
                <Routers />
            </AuthProvider>
        </>


    )
}