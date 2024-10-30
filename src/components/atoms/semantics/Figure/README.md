# Figure Component

The `Figure` component is a simple wrapper around the HTML `<figure>` element. It allows you to pass in children elements and a custom class name.

## Usage

```jsx
import { Figure } from './Figure';

const MyComponent = () => (
  <Figure className="my-figure-class">
    <img src="path/to/image.jpg" alt="Description" />
    <figcaption>This is a caption</figcaption>
  </Figure>
);
```

## Props

- `children` (ReactNode): The content to be wrapped by the `<figure>` element.
- `className` (string): A custom class name to style the `<figure>` element.

## Example

```jsx
import { Figure } from './Figure';

const Example = () => (
  <Figure className="example-class">
    <img src="example.jpg" alt="Example" />
    <figcaption>Example caption</figcaption>
  </Figure>
);

export default Example;
```

## Notes

- Ensure that the `className` prop is a valid CSS class.
- The `children` prop can include any valid React elements, such as images and captions.
