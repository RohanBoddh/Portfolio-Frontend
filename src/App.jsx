import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AchievementsPage from "./pages/AchievementsPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;