import { useState } from "react";
import { Chat, Video, Navbar } from "../components";


export default function HomePage(){

    const [showChat, setShowChat] =useState(false);

    const handleClick =() =>{
        setShowChat(true)
    }

    const closeChat = () =>{
      setShowChat(false)
    }

    return(
      <>
      <section>
        

    <Navbar openChat={handleClick} />
    <article className="flex justify-end h-2/4 ">
{showChat == true ? (<Chat closeChat={closeChat}/>) : (null)}
</article>
        <Video/>

       
      </section>


      </>
      


    )
}