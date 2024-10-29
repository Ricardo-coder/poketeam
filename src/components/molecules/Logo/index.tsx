/**
 * The `Logo` component displays the brand logo consisting of two text labels and an icon.
 * It splits the brand name into two parts and displays them with an icon in between.
 *
 * @returns {JSX.Element} The rendered logo component.
 *
 * @example
 * ```tsx
 * <Logo />
 * ```
 */
import { Heading, Icon } from "@/components/atoms";
import { BRAND } from "@/CONSTANTS";
import styles from "./styles.module.scss";

export function Logo() {
  const [text1, text2] = BRAND.split(" ");
  return (
    <div className={styles.logo}>
      <Heading data-logo-text-1 data-testid="logo-text-1">{text1}</Heading>
      <Icon data-testid="logo-icon" icon="Pokeball" sizes={{ width: 60, height: 60 }} />
      <Heading data-testid="logo-text-2">{text2}</Heading>
    </div>
  );
}
