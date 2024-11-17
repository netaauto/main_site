import "./App.css";
// import "./assets/style/index.css";

import "./assets/style/animate.min.css";
import "./assets/style/common.css";
import "./assets/style/cooperation.css";
import "./assets/style/join-us.css";
import "./assets/style/brand-story.css";
import "./assets/style/contact.css";
// import "./assets/style/v.css";
import "./assets/style/s.css";
import "./assets/style/gt.css";
import "./assets/style/moment.css";
import "./assets/style/moment-info.css";
import "./assets/style/familys.css";
import "./assets/style/foot.css";
import "./assets/style/header.css";
import "./assets/style/hover.css";
import "./assets/style/store.css";
import "./assets/style/after-sale.css";
import Header from "./components/Header/Header";
import BrandStory from "./pages/BrandStory";
import InvestmentCooperation from "./pages/InvestmentCooperation";
import JoinUs from "./pages/JoinUs";
import NetaGT from "./pages/NetaGT";
import NetaS from "./pages/NetaS";
import NetaV from "./pages/NetaV";
import NetaU from "./pages/NetaU";

import Home from "./pages/Home";
import MyCustomPage from "./pages/MyCustomPage";
import ContactUs from "./pages/ContactUs";
import NetaMoment from "./pages/NetaMoment";
import NetaMomentInfo from "./pages/NetaMomentInfo";
import NetaFamily from "./pages/NetaFamily";
import NetaService from "./pages/NetaService";
import NetaSpace from "./pages/NetaSpace";
import Footer from "./components/Footer/Root";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import Calculator from "./pages/Calculator";
import TestDrive from "./pages/TestDrive";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import UserManual from "./pages/UserManual";

function App() {

  const lang = localStorage.getItem("lang");

  useEffect(() => {
    if (!lang) {
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand-story.html" element={<BrandStory />} />
        <Route path="/join-us.html" element={<JoinUs />} />
        <Route
          path="/investment-cooperation.html"
          element={<InvestmentCooperation />}
        />
        <Route path="/contact-us.html" element={<ContactUs />} />
        <Route path="/neta-gt" element={<NetaGT />} />
        <Route path="/neta-s" element={<NetaS />} />
        <Route path="/neta-u" element={<NetaU />} />
        <Route path="/neta-v" element={<NetaV />} />
        <Route path="/neta-moment.html" element={<NetaMoment />} />
        <Route exact path="/neta-moment/:id" element={<NetaMomentInfo />} />
        <Route path="/neta-family.html" element={<NetaFamily />} />
        <Route path="/neta-service.html" element={<NetaService />} />
        <Route path="/neta-space.html" element={<NetaSpace />} />
        <Route path="/privacy.html" element={<Privacy />} />
        <Route path="/user-manual.html" element={<UserManual />} />
        <Route path="/legal-Imprint.html" element={<Legal />} />
        <Route path="/calculator.html" element={<Calculator />} />
        <Route path="/test-drive.html" element={<TestDrive />} />
        <Route path="/page/:id" element={<MyCustomPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
