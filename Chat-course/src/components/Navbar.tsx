
import { NavbarProps } from "../models/NavbarProps"


export default function NavBar({openChat} : NavbarProps){

    return (
        <nav className="bg-green-blue p-4 flex justify-between"> 
            <h1 className="font-bold">learn React</h1>
            <button className="font-bold" onClick={openChat}>Chat with group</button>
        </nav>

    )
}