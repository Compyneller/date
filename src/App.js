import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBarComp from "./components/NavBarComp";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Otp from "./pages/Otp";
import "toastify-js/src/toastify.css";
import ForgetPassword from "./pages/ForgetPassword";
import Message from "./pages/Message";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/message" element={<Message />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
