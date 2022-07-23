interface LinkButtonProps {
    label?: string;
    colored?: boolean;
    reactIcon?: JSX.Element;
    styles?: string;
    onClick?: (e: any) => void;
}

/**
 * @param label `string`
 * @param colored `boolean [optional]`
 * @param reactIcon `JSX.Element [optional]` - Any icon imported from `react-icons` package
 * @param styles `string [optional]` - Additional Styles
 * @param onClick `function [optional]`
 */
const LinkButton = (props: LinkButtonProps) => {
    return (
        <button
            type="button"
            className={`${props.colored && "text-primary"} ${props.styles}`}
            onClick={props.onClick}
        >
            <div className={`m-1 transition-all flex gap-2 items-center underline underline-offset-4 decoration-dotted hover:decoration-solid hover:decoration-primary`}>
                {props.reactIcon}
                {props.label && <span>{props.label}</span>}
            </div>
        </button>
    );
};

export default LinkButton;
