import Loader from "../../components/loader";

const Loading = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] w-full flex flex-col gap-4 items-center justify-center">
            <Loader size="lg" />
            <p>Loading...</p>
        </div>
    );
};

export default Loading;
