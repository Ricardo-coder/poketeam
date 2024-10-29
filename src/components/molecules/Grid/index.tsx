/**
 * Grid component that conditionally renders a loading state or the provided children.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.isLoading - Flag indicating whether the grid is in a loading state.
 * @param {ReactNode} props.children - The content to be displayed within the grid.
 * @returns {JSX.Element} The rendered Grid component.
 */
import { type ReactNode, Fragment } from "react";
import styles from './styles.module.scss';

interface GridProps {
  isLoading: boolean;
  children: ReactNode;
}

export function Grid({ isLoading, children }: GridProps): JSX.Element {
  return (
    <Fragment>
      {isLoading ? (
        <div />
      ) : (
        <div
          data-grid
          className={`${styles.grid}`}
        >
          {children}
        </div>
      )}
    </Fragment>
  )
}
