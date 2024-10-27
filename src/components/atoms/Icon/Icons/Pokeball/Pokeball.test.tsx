import { render } from "@testing-library/react";
import Pokeball from "./index";
import { IconProps } from "../../Icon";

describe("Pokeball Icon", () => {
  const defaultProps: IconProps = {
    sizes: { width: 50, height: 50 },
    fill: {
      "color-1": "#FFFFFF",
      "color-2": "#DFDFDF",
      "color-3": "#FF1C1C",
      "color-4": "#DF1818",
    },
  };

  it("renders the Pokeball icon with correct dimensions", () => {
    const { container } = render(<Pokeball {...defaultProps} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveAttribute("width", "50");
    expect(svgElement).toHaveAttribute("height", "50");
  });

  it("renders the Pokeball icon with correct fill colors", () => {
    const { container } = render(<Pokeball {...defaultProps} />);
    const paths = container.querySelectorAll("path");
    expect(paths[0]).toHaveAttribute("fill", "#FFFFFF");
    expect(paths[1]).toHaveAttribute("fill", "#DFDFDF");
    expect(paths[2]).toHaveAttribute("fill", "#FFFFFF");
    expect(paths[3]).toHaveAttribute("fill", "#FF1C1C");
    expect(paths[4]).toHaveAttribute("fill", "#DF1818");
  });

  it("renders the Pokeball icon with default fill colors when fill prop is not provided", () => {
    const propsWithoutFill: IconProps = {
      sizes: { width: 50, height: 50 },
      fill: {},
    };
    const { container } = render(<Pokeball {...propsWithoutFill} />);
    const paths = container.querySelectorAll("path");
    expect(paths[0]).toHaveAttribute("fill", "#FFFFFF");
    expect(paths[1]).toHaveAttribute("fill", "#DFDFDF");
    expect(paths[2]).toHaveAttribute("fill", "#FFFFFF");
    expect(paths[3]).toHaveAttribute("fill", "#FF1C1C");
    expect(paths[4]).toHaveAttribute("fill", "#DF1818");
  });

  it("renders the Pokeball icon with correct viewBox", () => {
    const { container } = render(<Pokeball {...defaultProps} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveAttribute("viewBox", "0 0 595.3 594.1");
  });
});