type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeader;
