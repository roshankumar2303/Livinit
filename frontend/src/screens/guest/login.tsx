import { IoLogInOutline } from "react-icons/io5";

import Button from "../../components/button";
import InputControl from "../../components/input-control";

const Login = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] w-full flex">
            <div className="m-auto px-10 py-12 border rounded-3xl acrylic-shadow">
                <h1 className="mb-8 font-bold text-5xl">Login</h1>
                <InputControl
                    label="Username"
                    inputType="text"
                    inputId="username"
                    inputRequired
                />
                <InputControl
                    label="Password"
                    inputType="password"
                    inputId="password"
                    inputRequired
                />
                <div className="flex mt-6 justify-center">
                    <Button
                        label="Login"
                        colored
                        reactIcon={<IoLogInOutline />}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
