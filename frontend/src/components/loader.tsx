interface LoaderProps {
    size?: string;
    colored?: boolean;
}

/**
 * @param size `One of ["xs", "sm", "md", "lg", "xl"] [Optional]`
 * @param colored `boolean [optional]`
 */
const Loader = (props: LoaderProps) => {
    const loaderSize = () => {
        switch (props.size) {
            case "xs":
                return "h-2 w-2";
            case "sm":
                return "h-4 w-4";
            case "md":
                return "h-6 w-6";
            case "lg":
                return "h-8 w-8";
            case "xl":
                return "h-16 w-16";
            default:
                return "h-6 w-6";
        }
    };

    return (
        <div className={`animate-spin ${loaderSize()}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className={`opacity-25 ${
                        props.colored
                            ? "stroke-primary"
                            : "stroke-black dark:stroke-white"
                    }`}
                    cx="12"
                    cy="12"
                    r="10"
                    stroke-width="4"
                ></circle>
                <path
                    className={`opacity-75 ${
                        props.colored
                            ? "fill-primary"
                            : "fill-black dark:fill-white"
                    }`}
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
        </div>
    );
};

export default Loader;
