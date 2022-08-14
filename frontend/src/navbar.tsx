import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    IoMenuOutline,
    IoCloseOutline,
    IoLogInOutline,
    IoPersonAddOutline,
} from "react-icons/io5";

import { authFetchParams } from "./fetch-utils/fetchParams";
import handleFetch from "./fetch-utils/handleFetch";

import Button from "./components/button";
import LinkButton from "./components/link-button";
import Logo from "./components/logo";

const Navbar = () => {
    const navigate = useNavigate();
    const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const [isValidSession, setSessionValidity] = useState(false);

    useEffect(() => {
        const checkSessionValidity = async () => {
            const response = await handleFetch(authFetchParams["validate"]);
            setSessionValidity(response.data.isValidSession);
        };
        checkSessionValidity();
    }, []);

    useEffect(() => {
        const listenNavPosition = () => {
            if (atTop === false && window.scrollY === 0) {
                setAtTop(true);
            }
            if (atTop === true && window.scrollY !== 0) {
                setAtTop(false);
            }
        };
        window.addEventListener("scroll", listenNavPosition);
        return () => window.removeEventListener("scroll", listenNavPosition);
    }, [atTop]);

    return (
        <nav
            className={`transition sm:flex fixed top-0 left-0 right-0 z-[888] ${
                (!atTop || mobileNavExpanded) && "acrylic-shadow"
            }`}
        >
            <div className="mx-auto px-4 sm:px-8 h-[64px] max-w-[1280px] grow flex items-center justify-between">
                {/* LOGO */}
                <div className="flex gap-4 items-center">
                    <Logo />
                    <h1 className="font-bold">Livinit</h1>
                </div>

                {/* NAVIGATION LINKS - LARGE SCREENS */}
                <div className="hidden sm:flex gap-6 items-center">
                    <LinkButton
                        label="Home"
                        onClick={() => {
                            navigate("/home");
                        }}
                    />
                    <LinkButton
                        label="Store"
                        onClick={() => {
                            navigate("/store");
                        }}
                    />
                    <LinkButton
                        label="Community"
                        onClick={() => {
                            navigate("/community");
                        }}
                        disabled={!isValidSession}
                    />
                </div>

                {/* USER CONTROLS */}
                <div className="flex gap-6 items-center">
                    {/* NOT LOGGED IN */}
                    {!isValidSession && (
                        <div className="flex gap-2">
                            <Button
                                label="Login"
                                size="sm"
                                reactIcon={<IoLogInOutline />}
                                onClick={() => {
                                    navigate("/auth/login");
                                }}
                            />
                            <Button
                                label="Signup"
                                size="sm"
                                reactIcon={<IoPersonAddOutline />}
                                onClick={() => {
                                    navigate("/auth/signup");
                                }}
                            />
                        </div>
                    )}

                    {/* LOGGED IN */}
                    {isValidSession && <div className="hidden gap-6"></div>}

                    {/* BUTTON FOR COLLAPSIBLE NAV-LINKS */}
                    <Button
                        className="sm:hidden"
                        colored
                        reactIcon={
                            mobileNavExpanded ? (
                                <IoCloseOutline />
                            ) : (
                                <IoMenuOutline />
                            )
                        }
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
                            navigate("/home");
                        }}
                    />
                    <LinkButton
                        label="Store"
                        onClick={() => {
                            navigate("/store");
                        }}
                    />
                    <LinkButton
                        label="Community"
                        onClick={() => {
                            navigate("/community");
                        }}
                        disabled={!isValidSession}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
