import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

function App() {
    const { loading } = useSelector((state) => state.root);

    return (
        <BrowserRouter>
            {/* <Loader /> */}
            {loading? <Loader />:null}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
