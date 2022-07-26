import Loader from "../../components/loader";

const Loading = () => {
    return (
        <div className="screen flex flex-col gap-4 items-center justify-center">
            <Loader size="lg" />
            <p>Loading...</p>
        </div>
    );
};

export default Loading;
