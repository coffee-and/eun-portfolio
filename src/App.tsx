import { useEffect, useState } from "react";
import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import AskEunSection from "./components/AskEunSection";
import SkillsSection from "./components/SkillsSection";
import CareerHighlightsSection from "./components/CareerHighlightsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const getRoute = () => (window.location.hash === "#/resume" ? "resume" : "portfolio");

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "instant" });
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
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <CareerHighlightsSection />
      <AskEunSection />
      <ContactSection />

      <footer className="site-footer">
        <p>2026 은정안 · design and coding by me</p>
      </footer>
    </main>
  );
}

export default App;
