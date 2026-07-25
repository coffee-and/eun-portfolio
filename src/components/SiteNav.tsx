import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "home", href: "#home" },
  { label: "work", href: "#projects" },
  { label: "films", href: "#videos" },
  { label: "career", href: "#career" },
  { label: "skills", href: "#skills" },
  { label: "about", href: "#ask-eun" },
  { label: "contact", href: "#contact" },
];

const SiteNav = () => {
  return (
    <header className="site-nav">
      <a className="site-nav__brand" href="#home" aria-label="portfolio home">
        <BrandMark />
      </a>

      <nav className="site-nav__links" aria-label="portfolio navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="site-nav__actions">
        <ThemeToggle />
        <a className="site-nav__mode" href="#/resume">
          web resume
        </a>
      </div>
    </header>
  );
};

export default SiteNav;
