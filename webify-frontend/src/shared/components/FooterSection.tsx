interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-muted-foreground">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
