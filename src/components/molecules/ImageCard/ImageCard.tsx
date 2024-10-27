/**
 * ImageCard component displays an image with a title and links to a specified URL.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alt text for the image.
 * @param {string} props.title - The title text displayed above the image.
 * @param {string} props.link - The URL to which the card links.
 * @returns {JSX.Element} The rendered ImageCard component.
 */
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