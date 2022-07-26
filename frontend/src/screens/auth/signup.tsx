import { IoPersonAddOutline } from "react-icons/io5";

import Button from "../../components/button";
import InputControl from "../../components/input-control";

const Signup = () => {
    return (
        <div className="screen flex">
            <div className="m-auto px-10 py-12 border rounded-3xl acrylic-shadow">
                <h1 className="mb-8 font-bold text-5xl">Signup</h1>
                <InputControl
                    label="Your Username"
                    inputType="text"
                    inputId="username"
                    inputRequired
                />
                <InputControl
                    label="Your Password"
                    inputType="password"
                    inputId="password"
                    inputRequired
                />
                <InputControl
                    label="Confirm Password"
                    inputType="password"
                    inputId="password-check"
                    inputRequired
                />
                <div className="flex mt-6 justify-center">
                    <Button
                        label="Signup"
                        size="lg"
                        colored
                        reactIcon={<IoPersonAddOutline />}
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
