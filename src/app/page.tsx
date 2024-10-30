import { Main } from "@/components/atoms";
import { GenerationsGrid, Header } from "@/components/organism";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Main>
        <GenerationsGrid />
      </Main>
      <footer></footer>
    </Fragment>
  );
}
