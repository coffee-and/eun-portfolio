import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 420);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      className={isVisible ? "back-to-top back-to-top--visible" : "back-to-top"}
      onClick={handleClick}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <span>TOP</span>
      <span aria-hidden="true">↑</span>
    </button>
  );
};

export default BackToTop;
