from pathlib import Path
import subprocess


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"Could not update {label}: matched {count} times")
    return text.replace(old, new, 1)


editorial_path = Path("src/styles/editorial.css")
editorial = editorial_path.read_text(encoding="utf-8")

old_mobile_nav = '''  .site-nav {
    grid-template-columns: auto 1fr;
  }

  .site-nav__links {
    grid-column: 1 / -1;
    order: 3;
    padding-bottom: 10px;
    justify-self: stretch;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .site-nav__mode {
    grid-column: 2;
    grid-row: 1;
  }

'''
editorial = replace_once(
    editorial,
    old_mobile_nav,
    "",
    "obsolete two-row mobile navigation",
)

old_mobile_hero_margin = '''  .hero-editorial h1 {
    margin-block: 72px;
  }

'''
editorial = replace_once(
    editorial,
    old_mobile_hero_margin,
    "",
    "obsolete mobile hero heading margin",
)

old_narrow_hero = '''  .hero-editorial {
    margin-inline: -18px;
    padding-inline: 18px;
  }

'''
editorial = replace_once(
    editorial,
    old_narrow_hero,
    "",
    "negative narrow-screen hero margin",
)

editorial_path.write_text(editorial, encoding="utf-8")

frame_path = Path("src/styles/frame-form.css")
frame = frame_path.read_text(encoding="utf-8")

old_tablet_nav = '''  .site-nav {
    min-height: 60px;
    grid-template-columns: auto 1fr auto;
    gap: 14px;
  }

  .site-nav__links {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
  }
'''
new_tablet_nav = '''  .site-nav {
    width: 100%;
    min-height: 60px;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 14px;
  }

  .site-nav__links {
    min-width: 0;
    max-width: 100%;
    justify-self: stretch;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scrollbar-width: none;
  }
'''
frame = replace_once(
    frame,
    old_tablet_nav,
    new_tablet_nav,
    "compact mobile navigation",
)

old_phone_nav = '''  .site-nav {
    grid-template-columns: auto 1fr;
  }
'''
new_phone_nav = '''  .site-nav {
    grid-template-columns: auto minmax(0, 1fr);
  }
'''
frame = replace_once(
    frame,
    old_phone_nav,
    new_phone_nav,
    "phone navigation columns",
)

frame_path.write_text(frame, encoding="utf-8")

if "margin-inline: -18px" in editorial:
    raise RuntimeError("Negative hero margin remains")
if "grid-column: 1 / -1;\n    order: 3;" in editorial:
    raise RuntimeError("Two-row mobile navigation remains")
if "grid-template-columns: auto minmax(0, 1fr) auto;" not in frame:
    raise RuntimeError("Responsive navigation columns were not updated")
if "min-width: 0;\n    max-width: 100%;\n    justify-self: stretch;" not in frame:
    raise RuntimeError("Navigation overflow safeguards are missing")

# The historical verification job commits only the primary style files.
# Stage the cleaned source stylesheet so it is included in the same verified commit.
subprocess.run(
    ["git", "add", "src/styles/editorial.css"],
    check=True,
)
