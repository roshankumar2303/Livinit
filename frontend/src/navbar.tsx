import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    IoMenuOutline,
    IoLogInOutline,
    IoPersonAddOutline,
} from "react-icons/io5";

import Button from "./components/button";
import LinkButton from "./components/link-button";

interface NavbarProps {
    isGuest: boolean;
}

const Navbar = (props: NavbarProps) => {
    const navigate = useNavigate();
    const [mobileNavExpanded, setMobileNavExpanded] = useState(false);

    return (
        <nav className="bg-white/60 dark:bg-black/60 backdrop-blur-lg sm:flex shadow-lg sticky top-0">
            <div className="mx-auto px-4 sm:px-8 h-[64px] max-w-[1280px] grow flex items-center justify-between">
                {/* LOGO */}
                <div className="flex gap-6 items-center">
                    <h1 className="font-bold">Livinit</h1>
                </div>

                {/* NAVIGATION LINKS - LARGE SCREENS */}
                <div className="hidden sm:flex gap-6 items-center">
                    <LinkButton
                        label="Home"
                        onClick={() => {
                            navigate("home");
                        }}
                    />
                    <LinkButton
                        label="Store"
                        onClick={() => {
                            navigate("store");
                        }}
                    />
                    <LinkButton
                        label="Community"
                        onClick={() => {
                            navigate("community");
                        }}
                        disabled={props.isGuest}
                    />
                </div>

                {/* USER CONTROLS */}
                <div className="flex gap-6 items-center">
                    {/* NOT LOGGED IN */}
                    {props.isGuest && (
                        <div className="flex gap-2">
                            <Button
                                label="Login"
                                size="sm"
                                reactIcon={<IoLogInOutline />}
                                onClick={() => {
                                    navigate("login");
                                }}
                            />
                            <Button
                                label="Signup"
                                size="sm"
                                reactIcon={<IoPersonAddOutline />}
                                onClick={() => {
                                    navigate("signup");
                                }}
                            />
                        </div>
                    )}

                    {/* LOGGED IN */}
                    {!props.isGuest && <div className="hidden gap-6"></div>}

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
                    <LinkButton
                        label="Home"
                        onClick={() => {
                            navigate("home");
                        }}
                    />
                    <LinkButton
                        label="Store"
                        onClick={() => {
                            navigate("store");
                        }}
                    />
                    <LinkButton
                        label="Community"
                        onClick={() => {
                            navigate("community");
                        }}
                        disabled={props.isGuest}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
