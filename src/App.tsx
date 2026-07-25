import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import AskEunSection from "./components/AskEunSection";
import BackToTop from "./components/BackToTop";
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
import "./styles/frame-form.css";
import "./styles/frame-form-final.css";
import "./styles/final-polish.css";
import "./styles/follow-up-fixes.css";
import "./styles/type-brand-refresh.css";
import "./styles/rose-mobile-type-polish.css";
import "./styles/readme-palette.css";

const getRoute = () => (window.location.hash === "#/resume" ? "resume" : "portfolio");

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRoute();

      setRoute((currentRoute) => {
        if (currentRoute !== nextRoute) {
          window.requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
          });
        }

        return nextRoute;
      });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      {route === "resume" ? (
        <ResumeSection />
      ) : (
        <main>
          <SiteNav />
          <Hero />
          <ProjectsSection />
          <YouTubeSection />
          <AboutSection />
          <CareerHighlightsSection />
          <SkillsSection />
          <AskEunSection />
          <ContactSection />

          <footer className="site-footer">
            <p>2026 · product, design and coding by me</p>
            <strong>Eun Jeongan</strong>
          </footer>
        </main>
      )}
      <BackToTop />
    </>
  );
}

export default App;
