import { type ReactNode, Fragment } from "react";
import { useGrid } from "@/hooks";
import styles from './styles.module.scss';

interface GridProps {
  isLoading: boolean;
  children: ReactNode;
  totalItens: number;
}

export function Grid({ isLoading, children, totalItens }: GridProps): JSX.Element {
  const grid = useGrid(totalItens);

  return (
    <Fragment>
      {isLoading || grid === 0 ? (
        <div />
      ) : (
        <div
          data-grid
          className={`${styles.grid}`}
          style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}
        >
          {children}
        </div>
      )}
    </Fragment>
  )
}