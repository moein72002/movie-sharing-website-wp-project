import './app.scss'
import Home from "./pages/home/Home"
import Register from "./pages/register/Register";
import {
    BrowserRouter, Route,
    Routes
} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;