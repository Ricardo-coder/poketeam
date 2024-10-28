/**
 * Section component that wraps its children in a styled `<section>` element.
 *
 * @param {SectionProps} props - The properties for the Section component.
 * @param {React.ReactNode} props.children - The content to be displayed within the section.
 * @returns {JSX.Element} A styled section element containing the provided children.
 */
import styles from './styles.module.scss';

interface SectionProps {
  children?: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return <section data-section className={styles.section}>{children}</section>;
}