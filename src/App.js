import "./App.css";
import { Home } from "./pages/Home";
import "./config/i18n";
import { Services } from "./pages/Services";
import { Jobs } from "./pages/Jobs";
import { ContactUs } from "./pages/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "./assets/Ellipse 6.png";
function App() {
  return (
    <BrowserRouter>
      <FloatingWhatsApp
        phoneNumber="+212 607-654550"
        accountName="Modual"
        statusMessage="Support is online"
        avatar= {avatar}
        allowEsc
        autoOpen
        autoClose
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
