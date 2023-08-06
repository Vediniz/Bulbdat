import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Environments from "./pages/Board/Environments";
import Perfil from "./pages/Board/Perfil";
import Dashboard from "./pages/Board/Dashboard";
import Calculator from "./pages/Board/Calculator";

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
                {/* Após Login! Só para não se perder. */}
                <Route path="/board" element={<Dashboard />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/environments" element={<Environments />} />
                <Route path="/calculator" element={<Calculator/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
