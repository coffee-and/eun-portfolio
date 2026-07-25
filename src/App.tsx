import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import AskEunSection from "./components/AskEunSection";
import CareerHighlightsSection from "./components/CareerHighlightsSection";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import SiteNav from "./components/SiteNav";
import SkillsSection from "./components/SkillsSection";
import YouTubeSection from "./components/YouTubeSection";
import "./styles/editorial.css";
import "./styles/editorial-fixes.css";
import "./styles/typography-polish.css";

const getRoute = () => (window.location.hash === "#/resume" ? "resume" : "portfolio");

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (route === "resume") {
    return <ResumeSection />;
  }

  return (
    <main>
      <SiteNav />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <YouTubeSection />
      <CareerHighlightsSection />
      <SkillsSection />
      <AskEunSection />
      <ContactSection />

      <footer className="site-footer">
        <p>2026 은정안 · product, design and coding by me</p>
      </footer>
    </main>
  );
}

export default App;
