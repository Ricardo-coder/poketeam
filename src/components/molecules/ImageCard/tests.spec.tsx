import { render } from "@testing-library/react";
import { ImageCard } from "./";

describe("ImageCard", () => {
  const props = {
    src: "/test-image.jpg",
    alt: "Test Image",
    title: "Test Title",
    link: "/test-link",
  };

  it("renders the ImageCard component", () => {
    const { getByText, getByAltText } = render(<ImageCard {...props} />);
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByAltText(props.alt)).toBeInTheDocument();
  });

  it("has the correct link", () => {
    const { getByRole } = render(<ImageCard {...props} />);
    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", props.link);
  });

  it("has the correct class", () => {
    const { container } = render(<ImageCard {...props} />);
    expect(container.firstChild).toHaveClass("imageCard");
  });
});