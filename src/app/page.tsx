import { Main } from "@/components/atoms";
import { GenerationsGrid } from "@/components/organism";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Main>
        <GenerationsGrid />
      </Main>
      <footer></footer>
    </Fragment>
  );
}
