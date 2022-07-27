import { useState } from "react";

import { IoLogInOutline, IoArrowForward, IoArrowBack } from "react-icons/io5";

import Button from "../../components/button";
import InputControl from "../../components/input-control";
import Logo from "../../components/logo";

const Login = () => {
    interface InputFieldState {
        type: "default" | "success" | "warning" | "error";
        message: string;
    }
    const defaultInputState: InputFieldState = {
        type: "default",
        message: "",
    };
    const successInputState: InputFieldState = {
        type: "success",
        message: "",
    };

    const [unameField, setUnameField] = useState("");
    const [unameState, setUnameState] = useState(defaultInputState);

    const [pwdField, setPwdField] = useState("");
    const [pwdState, setPwdState] = useState(defaultInputState);

    const screenBackground = "bg-cover bg-[url('assets/gradient-1.png')]";

    const unameFieldOnChange = (e: any) => {
        const field = e.target.value.toString();

        if (field.length === 0) {
            setUnameState({
                type: "warning",
                message: "Field is empty",
            });
        } else {
            setUnameState(defaultInputState);
        }

        setUnameField(field);
    };

    const pwdFieldOnChange = (e: any) => {
        const field = e.target.value.toString();

        if (field.length === 0) {
            setPwdState({
                type: "warning",
                message: "Field is empty",
            });
        } else {
            setPwdState(defaultInputState);
        }

        setPwdField(field);
    };

    const verifyUser = () => {
        // Check if user exists by posting username to web server
        // Dummy function for now...
        if (unameField.length === 0) {
            setUnameState({
                type: "warning",
                message: "Field is empty",
            });
            return;
        }

        setUnameState(successInputState);
    };

    const goBack = () => {
        // Go Back to Username field
        // Dummy function for now
        setUnameState(defaultInputState);
        setPwdState(defaultInputState);
    };

    const login = () => {
        // Login Functionality Goes here...
        // Dummy function for now
        if (pwdField.length === 0) {
            setPwdState({
                type: "warning",
                message: "Field is empty",
            });
            return;
        }

        setPwdState(successInputState);
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
                    {unameState.type === "success"
                        ? `Welcome back, ${unameField}`
                        : "An amazing world awaits for you."}
                </h1>

                {/* Username not verified - Prompt for Username */}
                {unameState.type !== "success" && (
                    <InputControl
                        label="Enter Username to continue"
                        inputType="text"
                        inputId="username"
                        inputRequired
                        inputOnChange={unameFieldOnChange}
                        inputValue={unameField}
                        state={unameState}
                    />
                )}
                {unameState.type !== "success" && (
                    <Button
                        colored
                        className="w-full"
                        label="Proceed to Login"
                        reactIcon={<IoArrowForward />}
                        onClick={() => {
                            verifyUser();
                        }}
                    />
                )}

                {/* Username Verified - Prompt for Password */}
                {unameState.type === "success" && (
                    <InputControl
                        label="Enter Password"
                        inputType="password"
                        inputId="password"
                        inputRequired
                        inputOnChange={pwdFieldOnChange}
                        inputValue={pwdField}
                        state={pwdState}
                    />
                )}
                {unameState.type === "success" && (
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
