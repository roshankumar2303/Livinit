import { useState } from "react";

import { IoLogInOutline, IoArrowForward, IoArrowBack } from "react-icons/io5";

import Button from "../../components/button";
import InputControl from "../../components/input-control";
import Logo from "../../components/logo";

const Login = () => {
    const [unameField, setUnameField] = useState("");
    const [pwdField, setPwdField] = useState("");
    const [unameVerified, setUnameVerified] = useState(false);

    const screenBackground =
        "bg-cover bg-[url('assets/login-gradient-light.jpg')] dark:bg-[url('assets/login-gradient-dark.jpg')]";

    const unameFieldOnChange = (e: any) => {
        setUnameField(e.target.value);
    };

    const pwdFieldOnChange = (e: any) => {
        setPwdField(e.target.value);
    };

    const verifyUser = () => {
        // Check if user exists by posting username to web server
        // Dummy function for now...
        setUnameVerified(true);
    };

    const goBack = () => {
        // Go Back to Username field
        // Dummy function for now
        setUnameVerified(false);
    };

    const login = () => {
        // Login Functionality Goes here...
    };

    return (
        <div
            className={`screen flex items-center justify-center ${screenBackground}`}
        >
            <div className="m-2 px-10 py-12 acrylic-shadow border border-neutral-500 rounded-3xl max-w-[400px] overflow-hidden">
                <div className="flex gap-4 mb-8 items-center">
                    <Logo size="lg" />
                    <div className="w-[1px] h-12 rounded bg-primary"></div>
                    <IoLogInOutline className="text-4xl" />
                </div>
                <h1 className="mb-8 font-bold text-4xl">
                    {unameVerified
                        ? `Welcome back, ${unameField}`
                        : "An amazing world awaits for you."}
                </h1>

                {/* Username not verified - Prompt for Username */}
                {unameVerified === false && (
                    <InputControl
                        label="Enter Username to continue"
                        inputType="text"
                        inputId="username"
                        inputValue={unameField}
                        inputOnChange={unameFieldOnChange}
                        inputRequired
                    />
                )}
                {unameVerified === false && (
                    <Button
                        className="w-full"
                        label="Proceed to Login"
                        colored
                        reactIcon={<IoArrowForward />}
                        onClick={() => {
                            verifyUser();
                        }}
                    />
                )}

                {/* Username Verified - Prompt for Password */}
                {unameVerified && (
                    <InputControl
                        label="Enter Password"
                        inputType="password"
                        inputId="password"
                        inputValue={pwdField}
                        inputOnChange={pwdFieldOnChange}
                        inputRequired
                    />
                )}
                {unameVerified && (
                    <div className="flex gap-4">
                        <Button
                            className="w-[50%]"
                            label="Back"
                            reactIcon={<IoArrowBack />}
                            onClick={() => {
                                goBack();
                            }}
                        />

                        <Button
                            className="w-[50%]"
                            label="Login"
                            colored
                            reactIcon={<IoLogInOutline />}
                            onClick={() => {
                                login();
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
