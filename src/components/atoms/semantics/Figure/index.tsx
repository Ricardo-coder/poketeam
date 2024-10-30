/**
 * A functional component that renders a `<figure>` HTML element.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the `<figure>` element.
 * @param {string} props.className - The CSS class to be applied to the `<figure>` element.
 * @returns {JSX.Element} The rendered `<figure>` element.
 */
import { createElement } from 'react';

export function Figure({ children, className }: Fabric) {
  return createElement('figure', {
    className: className,
  }, children);
}
