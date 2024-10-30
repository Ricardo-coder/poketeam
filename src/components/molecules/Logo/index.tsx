/**
 * Logo component that displays the brand name split into two parts with an icon in between.
 *
 * This component uses the `Figure`, `Heading`, and `Icon` components from the atoms directory.
 * It also imports brand constants from the constants file and styles from a local stylesheet.
 *
 * @returns {JSX.Element} The rendered Logo component.
 */
import { Figure, Heading, Icon } from "@/components/atoms";
import { BRAND } from "@/CONSTANTS";
import styles from "./styles.module.scss";

export function Logo() {
  const [text1, text2] = BRAND.split(" ");
  return (
    <Figure className={styles.logo}>
      <Heading>{text1}</Heading>
      <Icon icon="Pokeball" sizes={{ width: 60, height: 60 }} />
      <Heading>{text2}</Heading>
    </Figure>
  );
}
