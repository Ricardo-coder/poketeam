/**
 * Header component that renders a semantic HTML header element.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the header.
 * @param {string} props.className - The CSS class to apply to the header element.
 * @returns {JSX.Element} The rendered header element.
 */
import { createElement } from 'react';

export function Header({ children, className }: Fabric) {
  return createElement('header', {
    className: className,
  }, children);
}
