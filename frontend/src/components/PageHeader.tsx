
import Link from "next/link";
import styles from "../styles/PageHeader.module.css";

export type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
};

export default function PageHeader({
  backgroundImage,
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section
      className={styles.headerSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs}>
          <ol>
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <span className={styles.separator}>/</span>}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
