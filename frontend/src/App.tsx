import Navbar from "./navbar";
import Home from "./screens/home";

const App = () => {
    return (
        <div className="dark:bg-black dark:text-white min-h-screen min-w-screen">
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
