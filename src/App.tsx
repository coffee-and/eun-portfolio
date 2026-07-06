import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import AskEunSection from "./components/AskEunSection";
import SkillsSection from "./components/SkillsSection";
import CareerHighlightsSection from "./components/CareerHighlightsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ResumeSection />
      <SkillsSection />
      <CareerHighlightsSection />
      <AskEunSection />
      <ContactSection />

      <footer className="site-footer">
        <p>2026 Eun Jeongan · design and coding by me</p>
      </footer>
    </main>
  );
}

export default App;
