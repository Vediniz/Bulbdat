import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Calculator from "./pages/Board/Calculator";
import Environments from "./pages/Board/Environments";
import Rooms from "./pages/Board/Rooms";
import Devices from "./pages/Board/Devices";
import Perfil from "./pages/Board/Perfil";

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
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/environments" element={<Environments />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/devices" element={<Devices />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
