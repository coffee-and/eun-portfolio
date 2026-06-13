import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AskEunSection from "./components/AskEunSection";
import SkillsSection from "./components/SkillsSection";
import CareerHighlightsSection from "./components/CareerHighlightsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <AskEunSection />
      <SkillsSection />
      <CareerHighlightsSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="site-footer">
        <p>© 2026 Eun Jeongan · Built with React & TypeScript</p>
      </footer>
    </main>
  );
}

export default App;
