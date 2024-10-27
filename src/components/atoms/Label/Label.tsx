/**
 * Label component that renders a specified HTML tag with optional children.
 *
 * @param {LabelProps} props - The properties for the Label component.
 * @param {React.ReactNode} [props.children] - The content to be rendered inside the Label component.
 * @param {'span' | 'p'} [props.tag='span'] - The HTML tag to be used for the Label component.
 * 
 * @returns {JSX.Element} The rendered Label component.
 */
import { createElement } from "react";
import styles from "./Label.module.scss";

interface LabelProps {
  children?: React.ReactNode;
  tag?: 'span' | 'p';
}

export function Label({ children = "", tag = "span" }: LabelProps): JSX.Element {
  if (
    tag !== 'span' as LabelProps['tag'] &&
    tag !== 'p' as LabelProps['tag']
  ) {
    console.log('if')
    return createElement('span', {
      'data-label': true,
      className: styles.label,
    }, children);
  }

  return createElement(tag, {
    'data-label': true,
    className: styles.label,
  }, children);
}

