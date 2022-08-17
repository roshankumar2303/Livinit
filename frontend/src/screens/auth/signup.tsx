import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoPersonAddOutline } from "react-icons/io5";

import Button from "../../components/button";
import InputControl from "../../components/input-control";
import Logo from "../../components/logo";

import { authFetchParams } from "../../fetch-utils/fetchParams";
import handleFetch from "../../fetch-utils/handleFetch";

const Signup = () => {
    const screenBackground = "bg-cover bg-[url('assets/gradient-1.png')]";

    const navigate = useNavigate();

    const defaultInputState: {
        type: "default" | "success" | "warning" | "error";
        message: string;
    } = {
        type: "default",
        message: "",
    };

    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
    });
    const [formStates, setFormStates] = useState({
        username: defaultInputState,
        password: defaultInputState,
        firstname: defaultInputState,
        lastname: defaultInputState,
        email: defaultInputState,
        phone: defaultInputState,
    });
    const [passwordState, setPasswordState] = useState(defaultInputState);

    const validateField = (fieldKey: string, fieldVal: string) => {
        if (fieldVal.length === 0) {
            setFormStates({
                ...formStates,
                [fieldKey]: {
                    type: "warning",
                    message: "Field is required",
                },
            });
        } else {
            setFormStates({
                ...formStates,
                [fieldKey]: defaultInputState,
            });
        }
    };

    const validateFieldsOnSubmit = () => {
        let flag = true;
        let newFormStates = { ...formStates };
        for (const [fieldKey, fieldVal] of Object.entries(formFields)) {
            if (fieldVal.length === 0) {
                flag = false;
                newFormStates = {
                    ...newFormStates,
                    [fieldKey]: {
                        type: "warning",
                        message: "Field is required",
                    },
                };
            }
        }
        setFormStates(newFormStates);
        return flag;
    };

    const formFieldsOnChange = (e: any) => {
        const fieldKey = e.target.id.toString();
        const fieldVal = e.target.value.toString();
        validateField(fieldKey, fieldVal);
        setFormFields({
            ...formFields,
            [fieldKey]: fieldVal,
        });
    };

    const passwordCheckOnChange = (e: any) => {
        if (e.target.value.toString() !== formFields.password) {
            setPasswordState({
                type: "error",
                message: "Passwords do not match",
            });
        } else {
            setPasswordState({
                type: "success",
                message: "Passwords match",
            });
        }
    };

    const passwordCheckOnSubmit = () => {
        return passwordState.type === "success";
    };

    const signup = async () => {
        if (validateFieldsOnSubmit() === false) return;
        if (passwordCheckOnSubmit() === false) return;

        const payload = {
            query: {
                ...formFields,
            },
        };
        try {
            const response = await handleFetch(
                authFetchParams["signup"],
                payload
            );
            if (response.status !== 500) {
                window.location.reload();
                navigate("", { replace: true });
            }
        } catch (error) {
            console.log(error);
        }
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
                        inputOnChange={formFieldsOnChange}
                        inputValue={formFields.username}
                        state={formStates.username}
                    />
                    <InputControl
                        label="Your Email"
                        size="100%"
                        inputType="email"
                        inputId="email"
                        inputRequired
                        inputOnChange={formFieldsOnChange}
                        inputValue={formFields.email}
                        state={formStates.email}
                    />
                    <InputControl
                        label="Your Phone"
                        size="100%"
                        inputType="tel"
                        inputId="phone"
                        inputRequired
                        inputOnChange={formFieldsOnChange}
                        inputValue={formFields.phone}
                        state={formStates.phone}
                    />
                </div>

                <div className="sm:flex sm:gap-4">
                    <InputControl
                        label="Your First Name"
                        size="100%"
                        inputType="text"
                        inputId="firstname"
                        inputRequired
                        inputOnChange={formFieldsOnChange}
                        inputValue={formFields.firstname}
                        state={formStates.firstname}
                    />
                    <InputControl
                        label="Your Last Name"
                        size="100%"
                        inputType="text"
                        inputId="lastname"
                        inputRequired
                        inputOnChange={formFieldsOnChange}
                        inputValue={formFields.lastname}
                        state={formStates.lastname}
                    />
                </div>

                <div className="sm:flex sm:gap-4">
                    <InputControl
                        label="Enter a password"
                        size="100%"
                        inputType="password"
                        inputId="password"
                        inputRequired
                        inputOnChange={formFieldsOnChange}
                        inputValue={formFields.password}
                        state={formStates.password}
                    />
                    <InputControl
                        label="Confirm Password"
                        size="100%"
                        inputType="password"
                        inputId="password-check"
                        inputRequired
                        inputOnChange={passwordCheckOnChange}
                        state={passwordState}
                        disabled={formFields.password.length === 0}
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
