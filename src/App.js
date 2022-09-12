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
import TC from "./pages/TC";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WhatIsBitCoin from "./pages/WhatIsBitCoin";
import Fees from "./pages/Fees";
import ContactUs from "./pages/ContactUs";
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
          <Route path="/tc" element={<TC />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/what-is-bitcoin" element={<WhatIsBitCoin />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
