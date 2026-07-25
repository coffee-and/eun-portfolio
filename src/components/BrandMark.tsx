type BrandMarkProps = {
  className?: string;
};

const BrandMark = ({ className = "" }: BrandMarkProps) => (
  <svg
    className={`brand-mark ${className}`.trim()}
    viewBox="0 0 78 38"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text className="brand-mark__word" x="0" y="30">
      eun
    </text>
    <circle className="brand-mark__dot" cx="70" cy="8.5" r="4.6" />
  </svg>
);

export default BrandMark;
