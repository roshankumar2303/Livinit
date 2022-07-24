interface LinkButtonProps {
    label?: string;
    colored?: boolean;
    reactIcon?: JSX.Element;
    styles?: string;
    disabled?: boolean;
    onClick?: (e: any) => void;
}

/**
 * @param label `string`
 * @param colored `boolean [optional]`
 * @param reactIcon `JSX.Element [optional]` - Any icon imported from `react-icons` package
 * @param styles `string [optional]` - Additional Styles
 * @param disabled `boolean [optional]`
 * @param onClick `function [optional]`
 */
const LinkButton = (props: LinkButtonProps) => {
    return (
        <button
            type="button"
            className={`${props.colored && "text-primary"} ${props.styles}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <div
                className={`transition-all flex gap-2 items-center underline underline-offset-4 decoration-dotted ${
                    props.disabled
                        ? "opacity-60"
                        : "hover:decoration-solid hover:decoration-primary"
                }`}
            >
                {props.reactIcon}
                {props.label && <span>{props.label}</span>}
            </div>
        </button>
    );
};

export default LinkButton;
