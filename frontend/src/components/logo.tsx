interface LogoProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    colored?: boolean;
}

/**
 * @param size `"xs" | "sm" | "md" | "lg" | "xl" [Optional]`
 * @param colored `boolean [optional]`
 */
const Logo = (props: LogoProps) => {
    const loaderSize = () => {
        switch (props.size) {
            case "xs":
                return "h-2 w-2";
            case "sm":
                return "h-4 w-4";
            case "md":
                return "h-8 w-8";
            case "lg":
                return "h-12 w-12";
            case "xl":
                return "h-16 w-16";
            default:
                return "h-8 w-8";
        }
    };

    return (
        <div className={`${loaderSize()}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
            >
                <rect
                    className={
                        props.colored
                            ? "stroke-primary"
                            : "stroke-black dark:stroke-white"
                    }
                    width="505.059932"
                    height="528.519364"
                    rx="100"
                    ry="100"
                    transform="matrix(.910783 0 0 0.870356 26 26)"
                    fill="none"
                    strokeWidth="36"
                    strokeLinecap="round"
                />
                <text
                    className={
                        props.colored
                            ? "fill-primary"
                            : "fill-black dark:fill-white"
                    }
                    dx="0"
                    dy="0"
                    fontFamily="Playfair Display"
                    fontSize="360"
                    fontWeight="600"
                    transform="translate(147.456208 383.644619)"
                    strokeWidth="0"
                >
                    <tspan y="0" fontWeight="600" strokeWidth="0">
                        L
                    </tspan>
                    <tspan
                        x="0"
                        y="360"
                        fontWeight="600"
                        strokeWidth="0"
                    ></tspan>
                </text>
            </svg>
        </div>
    );
};

export default Logo;
