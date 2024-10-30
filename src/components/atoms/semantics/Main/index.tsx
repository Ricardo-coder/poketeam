/**
 * Main component that renders a <main> HTML element with optional children and className.
 *
 * @param {MainProps} props - The properties for the Main component.
 * @param {React.ReactNode} [props.children] - The content to be rendered inside the <main> element.
 * @param {string} [props.className=styles.main] - The CSS class to apply to the <main> element. Defaults to the main class from the styles module.
 * @returns {React.ReactElement} The rendered <main> element.
 */
import { createElement } from 'react';
import styles from './styles.module.scss';

interface MainProps {
  children?: React.ReactNode;
  className?: string;
}

export function Main({ children, className = styles.main }: MainProps) {
  return createElement('main', {
    'data-main': true,
    className: className,
  }, children);
}
