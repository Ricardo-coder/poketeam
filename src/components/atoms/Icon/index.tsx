
/**
 * Properties for the Icon component.
 * 
 * @interface IconProps
 * @property {Sizes} sizes - The dimensions of the icon.
 * @property {Fill | string} [fill] - The fill color or pattern for the icon.
 * @property {string} [icon] - The name of the icon to be displayed.
 */

/**
 * Type definition for fill properties.
 * 
 * @typedef {Object} Fill
 * @property {string} [key] - The fill color or pattern for the icon.
 */

/**
 * Type definition for size properties.
 * 
 * @typedef {Object} Sizes
 * @property {number | string} width - The width of the icon.
 * @property {number | string} height - The height of the icon.
 */

/**
 * Icon component that dynamically imports and renders an SVG icon.
 * 
 * @param {IconProps} props - The properties for the Icon component.
 * @returns {JSX.Element | null} The rendered SVG icon or null if no icon is provided.
 */
import { lazy } from "react";

export interface IconProps {
  sizes: Sizes;
  fill?: Fill | string;
  icon?: string;
}

export function Icon({ sizes, fill, icon }: IconProps): JSX.Element | null {
  if (!icon) return null;

  const IconSVG = lazy(() => import(`./Icons/${icon ?? ''}`))

  return <IconSVG sizes={sizes} fill={fill} />
}
