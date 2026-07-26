from pathlib import Path
import re


def replace_block(text: str, old: str, new: str, label: str) -> str:
    if new in text:
        print(f"skip {label}: already updated")
        return text
    if old not in text:
        print(f"skip {label}: original block not found")
        return text
    print(f"update {label}")
    return text.replace(old, new, 1)


def replace_pattern(text: str, pattern: str, replacement: str, label: str) -> str:
    updated, count = re.subn(pattern, replacement, text, count=1, flags=re.S)
    print(f"update {label}: {count} match")
    return updated


frame_path = Path("src/styles/frame-form.css")
frame = frame_path.read_text(encoding="utf-8")

hero_summary_old = '''.hero-editorial .hero-summary {
  margin: 28px 0 0;
  display: grid;
  justify-content: stretch;
  gap: 0;
}

.hero-editorial .hero-summary span {
  padding: 10px 0;
  border: 0;
  border-bottom: 1px solid var(--border-light);
  border-radius: 0;
  background: transparent;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 500 !important;
  line-height: 1.45;
  text-transform: uppercase;
}'''
hero_summary_new = '''.hero-editorial .hero-summary {
  margin: 22px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 7px 16px;
}

.hero-editorial .hero-summary span {
  position: relative;
  padding-left: 12px;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 500 !important;
  line-height: 1.45;
  text-transform: uppercase;
}

.hero-editorial .hero-summary span::before {
  content: "";
  position: absolute;
  top: 0.68em;
  left: 0;
  width: 6px;
  height: 1px;
  background: var(--wine);
}'''
frame = replace_block(frame, hero_summary_old, hero_summary_new, "hero summary")
frame = replace_block(
    frame,
    ".hero-editorial .hero-actions {\n  margin-top: 28px;",
    ".hero-editorial .hero-actions {\n  margin-top: 22px;",
    "hero actions",
)
frame = replace_pattern(
    frame,
    r"\n\.hero-editorial__next \{.*?\n\.hero-editorial__next strong \{.*?\n\}\n",
    "\n",
    "obsolete hero next navigation",
)

youtube_summary_old = '''.youtube-card__details summary {
  padding: 11px 0;
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 500;
}'''
youtube_summary_new = '''.youtube-card__details summary {
  padding: 11px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
}

.youtube-card__details summary::-webkit-details-marker {
  display: none;
}

.youtube-card__details summary em {
  margin-left: auto;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
}

.youtube-card__details summary::after {
  content: "+";
  color: var(--wine);
  font-family: var(--font-mono);
  font-size: 0.86rem;
}

.youtube-card__details[open] summary::after {
  content: "−";
}'''
frame = replace_block(frame, youtube_summary_old, youtube_summary_new, "youtube details")

career_marker = '''.career-story__lead li {
  padding: 8px 0;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-muted);
  font-size: 0.7rem;
}
'''
career_addition = career_marker + '''
.career-story__meta {
  min-width: 0;
  display: grid;
  gap: 18px;
}

.career-story__technology-summary {
  margin: 0;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.64rem;
  line-height: 1.65;
}

.career-story__technology-summary span {
  margin-bottom: 7px;
  display: block;
  color: var(--wine);
  font-size: 0.58rem;
  text-transform: uppercase;
}

.career-story__details {
  margin: 28px 0 0 min(25%, 280px);
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}

.career-story__details > summary {
  padding: 14px 0;
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--ink);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
}

.career-story__details > summary::-webkit-details-marker {
  display: none;
}

.career-story__details > summary em {
  margin-left: auto;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
}

.career-story__details > summary::after {
  content: "+";
  color: var(--wine);
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.career-story__details[open] > summary::after {
  content: "−";
}

.career-story__details-content {
  padding-bottom: 18px;
}

.career-story__details .career-chapter {
  margin: clamp(34px, 4vw, 52px) 0 0;
}
'''
if ".career-story__details {" not in frame:
    frame = replace_block(frame, career_marker, career_addition, "career disclosure")

skills_marker = '''.skill-ledger header p {
  max-width: 480px;
  margin-top: 8px;
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.55;
}
'''
skills_addition = skills_marker + '''
.skill-ledger__names {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  list-style: none;
}

.skill-ledger__names li {
  padding: 6px 9px;
  border: 1px solid var(--border-light);
  color: var(--ink);
  font-size: 0.68rem;
  line-height: 1.35;
}

.skill-ledger__details {
  margin-top: 18px;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--ink);
}

.skill-ledger__details > summary {
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
}

.skill-ledger__details > summary::-webkit-details-marker {
  display: none;
}

.skill-ledger__details > summary em {
  margin-left: auto;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.56rem;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
}

.skill-ledger__details > summary::after {
  content: "+";
  color: var(--wine);
  font-family: var(--font-mono);
  font-size: 0.86rem;
}

.skill-ledger__details[open] > summary::after {
  content: "−";
}
'''
if ".skill-ledger__names {" not in frame:
    frame = replace_block(frame, skills_marker, skills_addition, "skills disclosure")

responsive_addition = '''

@media (max-width: 760px) {
  .career-story__details {
    margin-left: 0;
  }

  .career-story__details > summary,
  .skill-ledger__details > summary,
  .youtube-card__details > summary {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .career-story__details > summary em,
  .skill-ledger__details > summary em,
  .youtube-card__details > summary em {
    width: calc(100% - 24px);
    margin-left: 0;
  }

  .career-story__details .career-chapter {
    margin-top: 30px;
  }
}
'''
if "width: calc(100% - 24px);" not in frame:
    frame += responsive_addition

frame_path.write_text(frame, encoding="utf-8")

final_path = Path("src/styles/final-polish.css")
final = final_path.read_text(encoding="utf-8")
final_replacements = [
    ("section {\n  margin-bottom: clamp(64px, 7vw, 108px);\n}", "section {\n  margin-bottom: clamp(48px, 5.5vw, 80px);\n}", "section spacing"),
    (".hero-editorial {\n  margin-bottom: clamp(50px, 6vw, 84px);\n  padding-top: clamp(48px, 6vw, 78px);\n}", ".hero-editorial {\n  margin-bottom: clamp(34px, 4vw, 58px);\n  padding-top: clamp(30px, 4vw, 48px);\n}", "hero spacing"),
    (".hero-editorial__layout {\n  padding: clamp(38px, 5vw, 64px) 0 clamp(32px, 4.5vw, 56px);\n  gap: clamp(44px, 6vw, 88px);\n}", ".hero-editorial__layout {\n  padding: clamp(28px, 3.5vw, 42px) 0 clamp(24px, 3vw, 34px);\n  gap: clamp(32px, 5vw, 60px);\n}", "hero layout spacing"),
    (".section-header {\n  margin-bottom: clamp(28px, 4vw, 50px);\n}", ".section-header {\n  margin-bottom: clamp(24px, 3.5vw, 42px);\n}", "section header spacing"),
    (".projects-editorial__list,\n.youtube-grid {\n  row-gap: clamp(34px, 4.5vw, 58px);\n}", ".projects-editorial__list,\n.youtube-grid {\n  row-gap: clamp(28px, 4vw, 46px);\n}", "project grid spacing"),
    (".about-editorial__profile {\n  margin-bottom: clamp(42px, 5vw, 66px);\n}", ".about-editorial__profile {\n  margin-bottom: clamp(34px, 4vw, 54px);\n}", "about spacing"),
    (".earlier-work--editorial {\n  margin-top: clamp(52px, 6vw, 86px);\n}", ".earlier-work--editorial {\n  margin-top: clamp(42px, 5vw, 68px);\n}", "earlier work spacing"),
    (".career-stories {\n  margin-top: clamp(54px, 6vw, 88px);\n  gap: clamp(68px, 7vw, 108px);\n}", ".career-stories {\n  margin-top: clamp(38px, 4.5vw, 64px);\n  gap: clamp(42px, 5vw, 70px);\n}", "career spacing"),
    (".career-chapter {\n  margin-top: clamp(42px, 5vw, 66px);\n}", ".career-chapter {\n  margin-top: clamp(34px, 4vw, 52px);\n}", "career chapter spacing"),
    (".skills-editorial__groups {\n  gap: clamp(40px, 5vw, 68px);\n}", ".skills-editorial__groups {\n  gap: clamp(30px, 4vw, 48px);\n}", "skill spacing"),
    (".site-footer {\n  padding-top: clamp(46px, 6vw, 76px);\n}", ".site-footer {\n  padding-top: clamp(38px, 5vw, 62px);\n}", "footer spacing"),
]
for old, new, label in final_replacements:
    final = replace_block(final, old, new, label)
final_path.write_text(final, encoding="utf-8")

required_frame = [
    "display: flex;\n  flex-wrap: wrap;\n  gap: 7px 16px;",
    ".career-story__details {",
    ".skill-ledger__names {",
    ".youtube-card__details summary em {",
]
for snippet in required_frame:
    if snippet not in frame:
        raise RuntimeError(f"Missing required frame style: {snippet}")
if "hero-editorial__next" in frame:
    raise RuntimeError("Obsolete hero navigation styles remain")
if "margin-bottom: clamp(48px, 5.5vw, 80px);" not in final:
    raise RuntimeError("Compact section spacing was not applied")
