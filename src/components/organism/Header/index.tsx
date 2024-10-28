/**
 * The `Header` component renders the header section of the application.
 * It includes a `Section` component that contains the `Logo` component.
 *
 * @returns {JSX.Element} The rendered header component.
 */
import { Section } from "@/components/atoms";
import { Logo } from "@/components/molecules";
import styles from './styles.module.scss';

export function Header() {
  return (
    <header data-header className={styles.header}>
      <Section>
        <Logo />
      </Section>
    </header>
  );
}
