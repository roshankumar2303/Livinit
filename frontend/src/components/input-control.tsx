import { useState } from "react";
import {
    IoCheckmarkCircleOutline,
    IoAlertCircleOutline,
    IoCloseCircleOutline,
    IoEyeOutline,
    IoEyeOffOutline,
} from "react-icons/io5";

interface InputControlProps {
    label: string;
    inputType: "text" | "password" | "email" | "number";
    inputId: string;
    inputName?: string;
    inputValue?: string;
    inputPlaceholder?: string;
    inputRequired?: boolean;
    inputOnChange?: (e: any) => void;
    size?: string;
    disabled?: boolean;
    state?: {
        type: "default" | "success" | "warning" | "error";
        message: string;
    };
}

/**
 * @param label `string`
 * @param inputType `"text" | "password" | "email" | "number"`
 * @param inputId `string`
 * @param inputName `string [optional]`
 * @param inputValue `string [optional]`
 * @param inputPlaceholder `string [optional]`
 * @param inputRequired `boolean [optional]`
 * @param inputOnChange `function [optional]`
 * @param size `string [optional]`
 * @param disabled `boolean [optional]`
 * @param state `object [optional]`
 */
const InputControl = (props: InputControlProps) => {
    const [pwdToggle, setPwdToggle] = useState(false);

    const defaultStyles =
        "px-2 h-12 w-full transition rounded-lg border border-neutral-500 bg-neutral-500/10 focus:outline-none focus:border-primary focus:bg-primary/10";
    const stateBasedFieldStyles: { [key: string]: string } = {
        default: "",
        success: "pr-10 border-success bg-success/10",
        warning: "pr-10 border-warning bg-warning/10",
        error: "pr-10 border-error bg-error/10",
    };
    const stateBasedTextStyles: { [key: string]: string } = {
        default: "",
        success: "text-success",
        warning: "text-warning",
        error: "text-error",
    };
    const stateBasedIcons: { [key: string]: JSX.Element | undefined } = {
        default: undefined,
        success: <IoCheckmarkCircleOutline />,
        warning: <IoAlertCircleOutline />,
        error: <IoCloseCircleOutline />,
    };
    const pwdToggleIcons: { [key: string]: JSX.Element } = {
        show: <IoEyeOutline />,
        hide: <IoEyeOffOutline />,
    };

    return (
        <div className="pb-4 flex flex-col" style={{ width: props.size }}>
            <label className="mb-2 text-sm" htmlFor={props.inputId}>
                {props.label}
            </label>
            <div className="relative">
                <input
                    className={`${defaultStyles} ${
                        stateBasedFieldStyles[props.state?.type || "default"]
                    }`}
                    type={pwdToggle ? "text" : props.inputType}
                    id={props.inputId}
                    name={props.inputName}
                    value={props.inputValue}
                    placeholder={props.inputPlaceholder}
                    onChange={props.inputOnChange}
                    required={props.inputRequired}
                    disabled={props.disabled}
                />
                {props.state && props.state.type !== "default" && (
                    <div
                        className={`absolute right-[4px] top-[50%] -translate-y-[50%] p-2 text-xl rounded-lg ${
                            stateBasedTextStyles[props.state.type]
                        }`}
                    >
                        {stateBasedIcons[props.state.type]}
                    </div>
                )}
                {props.inputType === "password" && (
                    <div
                        className={`absolute right-[10px] top-[50%] -translate-y-[50%] p-1 text-xl cursor-pointer rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-primary ${
                            props.state &&
                            props.state.type !== "default" &&
                            "mr-8"
                        }`}
                        onClick={() => {
                            setPwdToggle(!pwdToggle);
                        }}
                    >
                        {pwdToggle ? pwdToggleIcons.hide : pwdToggleIcons.show}
                    </div>
                )}
            </div>
            {props.state && (
                <p
                    className={`text-xs mt-1 ${
                        stateBasedTextStyles[props.state.type]
                    }`}
                >
                    {props.state.message}
                </p>
            )}
        </div>
    );
};

export default InputControl;
