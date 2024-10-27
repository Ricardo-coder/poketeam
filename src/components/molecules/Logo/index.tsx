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
import { Icon, Label } from "@/components/atoms";
import { BRAND } from "@/CONSTANTS";
import styles from "./styles.module.scss";

export function Logo() {
  const [text1, text2] = BRAND.split(" ");
  return (
    <div className={styles.logo}>
      <Label data-logo-text-1>{text1}</Label>
      <Icon icon="Pokeball" sizes={{ width: 60, height: 60 }} />
      <Label>{text2}</Label>
    </div>
  );
}
