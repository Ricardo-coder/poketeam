/**
 * A functional component that renders a semantic HTML `<section>` element.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the section.
 * @param {string} props.className - The CSS class name to apply to the section.
 * @returns {React.ReactElement} The rendered section element.
 */
import { createElement } from 'react';

export function Section({ children, className }: Fabric) {
  return createElement('section', {
    className: className,
  }, children);
}
