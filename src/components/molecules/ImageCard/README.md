# ImageCard Component

The `ImageCard` component is a reusable UI component that displays an image with a title and links to a specified URL. It is built using Next.js and styled with SCSS modules.

## Props

The `ImageCard` component accepts the following props:

- **src**: The source URL of the image (string).
- **alt**: The alt text for the image (string).
- **title**: The title text displayed above the image (string).
- **link**: The URL to which the card should link (string).

## Usage

```jsx
import { ImageCard } from "@/components/molecules/ImageCard";

const Example = () => (
  <ImageCard
    src="/path/to/image.jpg"
    alt="Description of image"
    title="Card Title"
    link="/destination-url"
  />
);
```

## Example

```jsx
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/atoms";
import style from "./ImageCard.module.scss";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  link: string;
}

export function ImageCard({ src, alt, title, link }: ImageCardProps) {
  return (
    <Link data-image-card href={link} className={style.imageCard}>
      <Label>{title}</Label>
      <Image src={src} alt={alt} fill />
    </Link>
  );
}
```

## Styling

The component uses SCSS modules for styling. Ensure you have the corresponding SCSS file (`ImageCard.module.scss`) in the same directory.

```scss
/* ImageCard.module.scss */
.imageCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.imageCard :global(img) {
  border-radius: 8px;
  margin-top: 8px;
}
```

## Notes

- Ensure that the `Label` component is correctly imported from the `atoms` directory.
- The `Image` component from Next.js is used for optimized image loading.
