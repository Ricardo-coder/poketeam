
/**
 * Icon component that dynamically imports and renders an SVG icon.
 *
 * @param {IconProps} props - The properties for the Icon component.
 * @param {Sizes} props.sizes - The size of the icon.
 * @param {Fill | string} [props.fill] - The fill color of the icon.
 * @param {string} [props.icon] - The name of the icon to be imported and rendered.
 * @returns {JSX.Element} The rendered SVG icon or an empty fragment if no icon is provided.
 */
import { Fragment, lazy } from "react";

export interface IconProps {
  sizes: Sizes;
  fill?: Fill | string;
  icon?: string;
}

export function Icon({ sizes, fill, icon }: IconProps): JSX.Element {
  if (!icon) return <Fragment />;

  const IconSVG = lazy(() => import(`./Icons/${icon ?? ''}`))

  return <IconSVG sizes={sizes} fill={fill} />
}
