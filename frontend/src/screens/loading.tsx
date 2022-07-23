import Loader from "../components/loader";

const Loading = () => {
    return (
        <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
            <Loader size="lg" />
            <p>Loading...</p>
        </div>
    );
};

export default Loading;
