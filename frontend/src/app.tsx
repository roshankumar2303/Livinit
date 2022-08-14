import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./screens/home";
import Store from "./screens/store";
import Community from "./screens/community";
import Login from "./screens/auth/login";
import Signup from "./screens/auth/signup";
import NotFound from "./screens/misc/not-found";

import PrivateOutlet from "./router-outlets/PrivateOutlet";
import AuthOutlet from "./router-outlets/AuthOutlet";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/">
                    <Route path="" element={<Navigate to={"home"} />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                </Route>
                <Route path="/" element={<PrivateOutlet />}>
                    <Route path="community" element={<Community />} />
                </Route>
                <Route path="/auth" element={<AuthOutlet />}>
                    <Route path="" element={<Navigate to={"login"} />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
