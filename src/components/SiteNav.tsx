const navItems = [
  { label: "home", href: "#home" },
  { label: "projects", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

const SiteNav = () => {
  return (
    <header className="site-nav">
      <a className="site-nav__brand" href="#home" aria-label="portfolio home">
        eun.
      </a>

      <nav className="site-nav__links" aria-label="portfolio navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="site-nav__mode" href="#/resume">
        web resume
      </a>
    </header>
  );
};

export default SiteNav;
