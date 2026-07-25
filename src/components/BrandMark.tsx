type BrandMarkProps = {
  className?: string;
};

const BrandMark = ({ className = "" }: BrandMarkProps) => (
  <svg
    className={`brand-mark ${className}`.trim()}
    viewBox="0 0 68 32"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text className="brand-mark__word" x="0" y="25">
      eun
    </text>
    <circle className="brand-mark__dot" cx="61" cy="7" r="3.2" />
  </svg>
);

export default BrandMark;
