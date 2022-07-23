interface ButtonProps {
    label?: string;
    size?: string;
    colored?: boolean;
    reactIcon?: JSX.Element;
    styles?: string;
    onClick?: (e: any) => void;
}

/**
 * @param label `string`
 * @param size `One of ["sm", "md", "lg", "xl"] [optional]`
 * @param colored `boolean [optional]`
 * @param reactIcon `JSX.Element [optional]` - Any icon imported from `react-icons` package
 * @param styles `string [optional]` - Additional Styles
 * @param onClick `function [optional]`
 */
const Button = (props: ButtonProps) => {
    const defaultStyles = () => {
        const defaultStyle =
            "transition border-[1px] rounded-lg backdrop-blur bg-white/60 dark:bg-black/60 text-black dark:text-white";
        const sizeStyle: { [key: string]: string } = {
            sm: "p-2 text-xs",
            md: "p-2 text-base",
            lg: "px-4 py-2 text-lg",
            xl: "px-6 py-3 text-xl",
        };
        return defaultStyle + " " + sizeStyle[props.size || "md"];
    };

    const hoverStyles = () => {
        if (props.colored)
            return "border-primary hover:bg-primary hover:text-white dark:hover:text-black";
        return "border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black";
    };

    const activeStyles = () => {
        if (props.colored)
            return "active:bg-primary-600 active:border-primary-600";
        return "active:bg-gray-900 dark:active:bg-gray-300 active:border-gray-900 dark:active:border-gray-300";
    };

    return (
        <button
            type="button"
            className={`${defaultStyles()} ${hoverStyles()} ${activeStyles()} ${
                props.styles
            }`}
            onClick={props.onClick}
        >
            <div className="flex gap-2 items-center">
                {props.reactIcon}
                {props.label && <span>{props.label}</span>}
            </div>
        </button>
    );
};

export default Button;
