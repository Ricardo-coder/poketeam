/**
 * Main component that renders a <main> HTML element.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the <main> element.
 * @param {string} [props.className] - Optional CSS class name to apply to the <main> element.
 * @returns {JSX.Element} The rendered <main> element with the provided children and className.
 */
import { createElement } from 'react';

export function Main({ children, className }: Fabric) {
  return createElement('main', {
    className: className,
  }, children);
}
