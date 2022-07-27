import { useState } from "react";

import { IoPersonAddOutline } from "react-icons/io5";

import Button from "../../components/button";
import InputControl from "../../components/input-control";
import Logo from "../../components/logo";

const Signup = () => {
    interface InputFieldState {
        type: "default" | "success" | "warning" | "error";
        message: string;
    }
    const defaultInputState: InputFieldState = {
        type: "default",
        message: "",
    };

    const [unameField, setUnameField] = useState("");
    const [unameState, setUnameState] = useState(defaultInputState);

    const [emailField, setEmailField] = useState("");
    const [emailState, setEmailState] = useState(defaultInputState);

    const [phoneField, setPhoneField] = useState("");
    const [phoneState, setPhoneState] = useState(defaultInputState);

    const [pwdField, setPwdField] = useState("");
    const [pwdCheckField, setPwdCheckField] = useState("");
    const [pwdState, setPwdState] = useState(defaultInputState);

    const screenBackground = "bg-cover bg-[url('assets/gradient-1.png')]";

    const unameFieldOnChange = (e: any) => {
        const field = e.target.value.toString();

        if (field.length === 0) {
            setUnameState({
                type: "warning",
                message: "Username field is required",
            });
        } else {
            setUnameState(defaultInputState);
        }

        setUnameField(field);
    };

    const emailFieldOnChange = (e: any) => {
        const field = e.target.value.toString();

        if (field.length === 0) {
            setEmailState({
                type: "warning",
                message: "Email field is required",
            });
        } else {
            setEmailState(defaultInputState);
        }

        setEmailField(field);
    };

    const phoneFieldOnChange = (e: any) => {
        const field = e.target.value.toString();

        if (field.length === 0) {
            setPhoneState({
                type: "warning",
                message: "Phone field is required",
            });
        } else {
            setPhoneState(defaultInputState);
        }

        setPhoneField(field);
    };

    const pwdOnChange = (e: any) => {
        const field = e.target.value.toString();
        const fieldId = e.target.id.toString();

        if (field.length === 0) {
            setPwdState({
                type: "warning",
                message: "One (or) both the password fields are empty",
            });
            fieldId === "pwd" ? setPwdField("") : setPwdCheckField("");
        } else {
            if (fieldId === "pwd") {
                setPwdState(defaultInputState);
                setPwdCheckField("");
                setPwdField(field);
            }
            if (fieldId === "pwd-check") {
                if (field === pwdField) {
                    setPwdState({
                        type: "success",
                        message: "Passwords match",
                    });
                } else {
                    setPwdState({
                        type: "error",
                        message: "Passwords do not match",
                    });
                }
                setPwdCheckField(field);
            }
        }
    };

    const signup = () => {
        // Signup Functionality Goes here...
        // Dummy function for now
    };

    return (
        <div
            className={`screen flex items-center justify-center ${screenBackground}`}
        >
            <div className="m-2 px-10 py-12 acrylic-shadow border border-neutral-500 rounded-3xl w-full sm:w-[632px] md:w-[760px] overflow-hidden">
                <div className="flex gap-4 mb-8 items-center">
                    <Logo size="lg" />
                    <div className="w-[1px] h-12 rounded bg-primary"></div>
                    <IoPersonAddOutline className="text-4xl" />
                </div>
                <h1 className="mb-4 font-bold text-4xl">
                    Come aboard. The Livinit family welcomes you.
                </h1>
                <p className="mb-8 text-lg font-light">
                    Fill the below details to signup
                </p>

                <div className="sm:flex sm:gap-4">
                    <InputControl
                        label="Choose a Username"
                        size="100%"
                        inputType="text"
                        inputId="username"
                        inputRequired
                        inputOnChange={unameFieldOnChange}
                        inputValue={unameField}
                        state={unameState}
                    />
                    <InputControl
                        label="Your Email"
                        size="100%"
                        inputType="email"
                        inputId="email"
                        inputRequired
                        inputOnChange={emailFieldOnChange}
                        inputValue={emailField}
                        state={emailState}
                    />
                    <InputControl
                        label="Your Phone"
                        size="100%"
                        inputType="tel"
                        inputId="phone"
                        inputRequired
                        inputOnChange={phoneFieldOnChange}
                        inputValue={phoneField}
                        state={phoneState}
                    />
                </div>

                <div className="sm:flex sm:gap-4">
                    <InputControl
                        label="Your First Name"
                        size="100%"
                        inputType="text"
                        inputId="first-name"
                        inputRequired
                        // inputOnChange={}
                        // inputValue={}
                        // state={}
                    />
                    <InputControl
                        label="Your Last Name"
                        size="100%"
                        inputType="text"
                        inputId="last-name"
                        inputRequired
                        // inputOnChange={}
                        // inputValue={}
                        // state={}
                    />
                </div>

                <div className="sm:flex sm:gap-4">
                    <InputControl
                        label="Enter a password"
                        size="100%"
                        inputType="password"
                        inputId="pwd"
                        inputRequired
                        inputOnChange={pwdOnChange}
                        inputValue={pwdField}
                        state={pwdState}
                    />
                    <InputControl
                        label="Confirm Password"
                        size="100%"
                        inputType="password"
                        inputId="pwd-check"
                        inputRequired
                        inputOnChange={pwdOnChange}
                        inputValue={pwdCheckField}
                        state={pwdState}
                    />
                </div>

                <Button
                    colored
                    className="w-full mt-6"
                    label="Signup"
                    reactIcon={<IoPersonAddOutline />}
                    onClick={() => {
                        signup();
                    }}
                />
            </div>
        </div>
    );
};

export default Signup;
