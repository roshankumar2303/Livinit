import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./screens/home";
import Store from "./screens/store";
import Community from "./screens/community";
import Login from "./screens/auth/login";
import Signup from "./screens/auth/signup";
import NotFound from "./screens/misc/not-found";

const App = () => {
    const [isLoggedIn, setLoginStatus] = useState(false);

    return (
        <BrowserRouter>
            <div className="dark:bg-black dark:text-white">
                <Navbar isGuest={!isLoggedIn} />
                {!isLoggedIn && (
                    <Routes>
                        <Route path="/" element={<Navigate to={"/home"} />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                )}
                {isLoggedIn && (
                    <Routes>
                        <Route path="/" element={<Navigate to={"/home"} />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                )}
            </div>
        </BrowserRouter>
    );
};

export default App;
