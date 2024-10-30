/**
 * Section component that wraps its children in a styled `<section>` element.
 *
 * @param {SectionProps} props - The properties for the Section component.
 * @param {React.ReactNode} props.children - The content to be displayed within the section.
 * @returns {JSX.Element} A styled section element containing the provided children.
 */
import { createElement } from 'react';
import styles from './styles.module.scss';

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
}

export function Section({ children, className = styles.section }: SectionProps) {
  return createElement('section', {
    'data-section': true,
    className: className,
  }, children);
}
