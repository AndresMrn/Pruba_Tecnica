import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage, LoginPage } from "./pages";
import { AuthProvider } from "./context/AuthContext";
import RoutesProtected from "./RoutesProtected";
import HomePage from "./pages/Homepage";
import { Chat } from "./components";
import { useState } from "react";

export default function Routers() {

    const [showChat, setShowChat] =useState(false);


    const closeChat = () =>{
      setShowChat(false)
    }

    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<h1><LoginPage /></h1>} ></Route>
                        <Route path="/login" element={<LoginPage />} ></Route>
                        <Route path="/register" element={<RegisterPage />} ></Route>

                        <Route element={<RoutesProtected />}>
                            <Route path="/home-page" element={<HomePage />} ></Route>
                            <Route path="/chat" element={<Chat closeChat={closeChat} />} ></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>

        </>
    )
}