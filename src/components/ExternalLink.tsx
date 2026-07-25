import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel" | "aria-label"
> & {
  href: string;
  ariaLabel: string;
  children: ReactNode;
};

const ExternalLink = ({
  href,
  ariaLabel,
  children,
  ...anchorProps
}: ExternalLinkProps) => (
  <a
    {...anchorProps}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

export default ExternalLink;
