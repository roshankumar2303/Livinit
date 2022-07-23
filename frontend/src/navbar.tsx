import { useState } from "react";

import {
    IoMenuOutline,
    IoLogInOutline,
    IoPersonAddOutline,
} from "react-icons/io5";

import Button from "./components/button";
import LinkButton from "./components/link-button";

const Navbar = () => {
    const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
    const [isLoggedIn, setLoginStatus] = useState(false);

    return (
        <nav className="bg-white/60 dark:bg-black/60 backdrop-blur-lg sm:flex shadow-lg sticky top-0">
            <div className="mx-auto px-4 sm:px-8 h-[64px] max-w-[1280px] grow flex items-center justify-between">
                {/* LOGO */}
                <div className="flex gap-6 items-center">
                    <h1 className="font-bold">Livinit</h1>
                </div>

                {/* NAVIGATION LINKS - LARGE SCREENS */}
                <div className="hidden sm:flex gap-6 items-center">
                    <LinkButton label="Home" />
                    <LinkButton label="Store" />
                    <LinkButton label="Community" />
                </div>

                {/* USER CONTROLS */}
                <div className="flex gap-6 items-center">
                    {/* NOT LOGGED IN */}
                    {!isLoggedIn && (
                        <div className="flex gap-2">
                            <Button
                                label="Login"
                                size="sm"
                                reactIcon={<IoLogInOutline />}
                            />
                            <Button
                                label="Signup"
                                size="sm"
                                reactIcon={<IoPersonAddOutline />}
                            />
                        </div>
                    )}

                    {/* LOGGED IN */}
                    {isLoggedIn && <div className="hidden gap-6"></div>}

                    {/* BUTTON FOR COLLAPSIBLE NAV-LINKS */}
                    <Button
                        styles="sm:hidden"
                        colored
                        reactIcon={<IoMenuOutline />}
                        onClick={() => {
                            setMobileNavExpanded(!mobileNavExpanded);
                        }}
                    />
                </div>
            </div>
            <div
                className={`sm:hidden overflow-hidden transition-[height] ${
                    mobileNavExpanded ? "h-[360px]" : "h-0"
                } `}
            >
                <div className="h-[360px] flex flex-col gap-10 items-center justify-center">
                    <LinkButton label="Home" />
                    <LinkButton label="Store" />
                    <LinkButton label="Community" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
