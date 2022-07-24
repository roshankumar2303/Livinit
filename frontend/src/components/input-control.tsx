import {
    IoCheckmarkCircleOutline,
    IoWarningOutline,
    IoCloseCircleOutline,
} from "react-icons/io5";

interface InputControlProps {
    label: string;
    inputType: string;
    inputId: string;
    inputName?: string;
    inputValue?: string;
    inputPlaceholder?: string;
    inputRequired?: boolean;
    inputOnChange?: (e: any) => void;
    state?: "default" | "success" | "warning" | "error";
    messages?: {
        default?: string;
        success?: string;
        warning?: string;
        error?: string;
    };
    size?: string;
    disabled?: boolean;
}

/**
 * @param label `string`
 * @param inputType `string`
 * @param inputId `string`
 * @param inputName `string [optional]`
 * @param inputValue `string [optional]`
 * @param inputPlaceholder `string [optional]`
 * @param inputRequired `boolean [optional]`
 * @param inputOnChange `function [optional]`
 * @param state `"default" | "success" | "warning" | "error" [optional]`
 * @param messages `object [optional]`
 * @param size `string [optional]`
 * @param disabled `boolean [optional]`
 */
const InputControl = (props: InputControlProps) => {
    const defaultStyles =
        "pl-2 pr-10 h-12 w-full transition rounded-lg border border-neutral-500 bg-neutral-500/10 focus:outline-none focus:border-primary focus:bg-primary/10";
    const stateBasedFieldStyles: { [key: string]: string } = {
        default: "",
        success: "border-success bg-success/10",
        warning: "border-warning bg-warning/10",
        error: "border-error bg-error/10",
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
        warning: <IoWarningOutline />,
        error: <IoCloseCircleOutline />,
    };

    return (
        <div
            className="pb-4 flex flex-col"
            style={{ width: props.size || "400px" }}
        >
            <label className="mb-2 text-sm" htmlFor={props.inputId}>
                {props.label}
            </label>
            <div className="relative">
                <input
                    type={props.inputType}
                    id={props.inputId}
                    name={props.inputName}
                    value={props.inputValue}
                    placeholder={props.inputPlaceholder}
                    onChange={props.inputOnChange}
                    required={props.inputRequired}
                    className={`${defaultStyles} ${
                        props.state && stateBasedFieldStyles[props.state]
                    }`}
                />
                {props.state && props.state !== "default" && (
                    <div
                        className={`absolute right-0 top-[50%] -translate-y-[50%] p-3 rounded-lg ${
                            stateBasedTextStyles[props.state]
                        }`}
                    >
                        {stateBasedIcons[props.state]}
                    </div>
                )}
            </div>
            {props.state && (
                <p
                    className={`text-xs mt-1 ${
                        stateBasedTextStyles[props.state]
                    }`}
                >
                    {props.messages && props.messages[props.state]}
                </p>
            )}
        </div>
    );
};

export default InputControl;
