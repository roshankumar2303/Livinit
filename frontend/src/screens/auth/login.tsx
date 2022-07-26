import { IoLogInOutline, IoArrowForward } from "react-icons/io5";

import Button from "../../components/button";
import InputControl from "../../components/input-control";
import Logo from "../../components/logo";

const Login = () => {
    return (
        <div className="screen flex">
            <div className="m-auto px-10 py-12 acrylic-shadow border rounded-3xl max-w-[400px]">
                <div className="flex gap-4 mb-8 items-center">
                    <Logo size="lg" />
                    <div className="w-[1px] h-12 rounded bg-primary"></div>
                    <IoLogInOutline className="text-4xl" />
                </div>
                <h1 className="mb-8 font-bold text-4xl">
                    An amazing world awaits for you.
                </h1>
                <InputControl
                    label="Enter Username to continue"
                    inputType="text"
                    inputId="username"
                    inputRequired
                />
                {/* <InputControl
                    label="Password"
                    inputType="password"
                    inputId="password"
                    inputRequired
                /> */}
                <Button
                    className="w-full"
                    label="Proceed to Login"
                    colored
                    reactIcon={<IoArrowForward />}
                />
            </div>
        </div>
    );
};

export default Login;
